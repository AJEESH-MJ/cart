import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { readAll, create, remove } from '../redux/slices/customer.slice'

import AddButton from '../assets/AddButton'
import Button from '../assets/Button'
import LineHeading from '../assets/LineHeading'

import seedCustomers from '../constants/customer.sample'
// const customer = {
//   id: '1234-5678-1',
//   name: 'John Doe',
//   phone: '1234567890',
//   place: '1234 Main St, AnyTown, USA',
// }

export default function Customers() {
  const dispatch = useDispatch()

  const { customers, customer, errors } = useSelector((state) => state.customer)

  useEffect(() => {
    dispatch(readAll())
  }, [dispatch, customer])

  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    place: '',
  })
  const { name, phone, place } = customerData

  const onChangeHandler = (e) => {
    setCustomerData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const addCustomerHandler = () => {
    const customer = {
      name,
      phone,
      place,
    }
    dispatch(create(customer))
  }

  const seedCustomerHandler = () => {
    seedCustomers.forEach((customer) => {
      // random 10 number generator
      const number = Math.floor(Math.random() * 10000000000)
      // convert number to string
      customer.phone = number.toString()
      dispatch(create(customer))
    })
  }

  const [addCustomer, setAddCustomer] = useState(false)
  return (
    <>
      {addCustomer ? (
        <>
          <div class='flex m-8  mt-20 w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300'>
            <div class='text-xl font-semibold text-gray-500 '>Add Customer</div>
            <div class='flex w-[100%] flex-col gap-5'>
              <LineHeading text={'Please enter the customers details'} />
              <input
                name='name'
                value={name}
                onChange={onChangeHandler}
                type='text'
                class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
                placeholder='Name'
              />
              <input
                name='phone'
                value={phone}
                onChange={onChangeHandler}
                type='text'
                class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
                placeholder='Phone'
              />
              <input
                name='place'
                value={place}
                onChange={onChangeHandler}
                type='text'
                class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
                placeholder='Place'
              />
              <div className='flex flex-col text-sm gap-3 text-red-500'>
                {errors &&
                  Object.values(errors).map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
              </div>
              <div className='flex gap-3'>
                <div
                  class='flex-1'
                  onClick={() => setAddCustomer(!addCustomer)}>
                  <Button text={'CANCEL'} color={'bg-red-600'} />
                </div>
                {/* <div class='flex-1 text-right' onClick={seedCustomerHandler}>
                  <Button text={'SEED'} color={'bg-green-600'} />
                </div> */}
                <div class='flex-1 text-right' onClick={addCustomerHandler}>
                  <Button text={'ADD'} color={'bg-green-600'} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <button
          class='flex items-center p-2 mt-20 mb-2 mx-auto rounded-md text-base text-gray-500 font-normal hover:bg-slate-200 active:bg-slate-300'
          onClick={() => setAddCustomer(!addCustomer)}>
          <AddButton />
          <div>Add Customer</div>
        </button>
      )}
      <div class='w-full overflow-x-auto relative shadow-md sm:rounded-lg bg-white'>
        <table class='w-full text-sm text-left text-gray-500 '>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50  '>
            <tr>
              <th scope='col' class='py-3 px-6'>
                Name
              </th>
              <th scope='col' class='py-3 px-6'>
                Phone
              </th>
              <th scope='col' class='py-3 px-6'>
                Place
              </th>
              <th scope='col' class='py-3 px-6'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {customers &&
              customers
                .slice(0)
                .reverse()
                .map((customer, index) => (
                  <tr key={index} class='bg-white border-b  '>
                    <td class='py-4 px-6 text-gray-900 font-medium'>
                      {customer.name}
                    </td>
                    <td class='py-4 px-6'>{customer.phone}</td>
                    <td class='py-4 px-6'>{customer.place}</td>
                    <td class='py-4 px-6'>
                      <button class='font-medium text-green-600  hover:underline  mr-5'>
                        Order
                      </button>
                      <button class='font-medium text-blue-600  hover:underline  mr-5'>
                        Edit
                      </button>
                      <button
                        onClick={() => dispatch(remove(customer._id))}
                        class='font-medium text-red-600  hover:underline'>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
