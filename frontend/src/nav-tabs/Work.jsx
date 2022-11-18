import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { create } from '../redux/slices/customer.slice'

import AddButton from '../assets/AddButton'
import Button from '../assets/Button'
import LineHeading from '../assets/LineHeading'

const template = {
  id: '1234-5678-5',
  garment: 'kandura',
  name: 'template 5',
  measurement: [
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'type',
      value: 'arabi, kuwaiti, kathari, jallabi, mughassir',
      unit: 'option',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b4578',
      label: 'lenght',
      value: '60',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b4579',
      label: 'bottom',
      value: '32',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'b-width',
      value: '3 1/4',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'shoulder',
      value: '19 3/4',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'neck',
      value: '16 1/2',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'h-lenght',
      value: '25 1/2',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'regal',
      value: '8 3/4',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'h-bottom',
      value: '6 1/8',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'chest',
      value: '41',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'k-lose',
      value: '24 1/4',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'ch-lose',
      value: '24 1/2',
      unit: 'inch',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'sleeve',
      value: 'bath, bithunbath',
      unit: 'option',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'stitch',
      value: 'inside, outside',
      unit: 'option',
    },
    {
      id: '5f9f1b9b9c9d3c0b8c8b457a',
      label: 'lisaan',
      value: 'bt, t-saada',
      unit: 'option',
    },
  ],
}

export default function Work() {
  const dispatch = useDispatch()

  const { customer, errors } = useSelector((state) => state.customer)

  const [tab, setTab] = useState('add')
  useEffect(() => {
    // if customer then set tab to order
    if (customer) {
      setTab('order')
    } else {
      setTab('add')
    }
  }, [customer])

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

  return (
    <>
      <div class='flex items-center gap-2  m-8  mt-24'>
        <div
          class={`${
            tab === 'add' ? 'h-8 w-8  bg-green-500' : 'h-6 w-6  bg-gray-300'
          } rounded-full`}
          onClick={() => setTab('add')}></div>
        <div class='h-1 w-20  bg-gray-300 rounded-full'></div>
        <div
          class={`${
            tab === 'order' ? 'h-8 w-8  bg-green-500' : 'h-6 w-6  bg-gray-300'
          } rounded-full`}
          onClick={() => setTab('order')}></div>
        <div class='h-1 w-20  bg-gray-300 rounded-full'></div>
        <div
          class={`${
            tab === 'measure' ? 'h-8 w-8  bg-green-500' : 'h-6 w-6  bg-gray-300'
          } rounded-full`}
          onClick={() => setTab('measure')}></div>
      </div>
      {tab === 'add' && (
        <>
          <div class='flex w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300'>
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
                <div class='flex-1 text-right' onClick={addCustomerHandler}>
                  <Button text={'ADD'} color={'bg-green-600'} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {tab === 'order' && (
        <>
          <div class='flex w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300'>
            <div class='text-xl font-semibold text-gray-500 '>
              Order Garment
            </div>
            <div class='flex w-[100%] flex-col gap-5'>
              <div className='flex items-center'>
                <div class='w-32 text-right mr-3'>Garmant:</div>
                <select class='w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'>
                  <option>kandura</option>
                  <option>shirt</option>
                  <option>pant</option>
                </select>
              </div>
              <div className='flex items-center'>
                <div class='w-32 text-right mr-3'>Note:</div>
                <textarea
                  class='w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
                  type='text'
                />
              </div>
              <div className='flex gap-3'>
                <div
                  class='flex-1 text-right'
                  onClick={() => setTab('measure')}>
                  <Button text={'NEXT'} color={'bg-green-600'} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {tab === 'measure' && (
        <>
          <div class='flex w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300'>
            <div class='text-xl font-semibold text-gray-500 '>
              Add Measurement
            </div>
            <div class='flex w-[100%] flex-col gap-5'>
              {/* <LineHeading text={'Please enter the measurements'} /> */}
              <div className='flex justify-center items-center gap-3'>
                <label class='mr-3 text-gray-500 text-xl font-medium'>
                  Template :
                </label>
                <select class=' rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'>
                  <option>Kandura main</option>
                  <option>Kandura template 2</option>
                  <option>Kandura template 3</option>
                </select>
              </div>
              {/* // create a table for measurement // headings are label,
                  value, unit // map through the measurement array // create a
                  row for each measurement */}
              <table class='table-auto text-gray-600 font-semibold'>
                <thead>
                  <tr class='text-gray-500'>
                    {/* <th>Label</th>
                <th>Value</th>
                <th>Unit</th> */}
                  </tr>
                </thead>
                <tbody>
                  {template.measurement.map((measure, index) => {
                    if (measure.unit === 'inch') {
                      console.log(measure)
                      return (
                        <tr key={index}>
                          <td>
                            <div class='text-right mr-3'>{measure.label}:</div>
                          </td>
                          <td>
                            <input
                              class='w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
                              type='text'
                              value={measure.value}
                            />
                          </td>
                          <td>{/* <div class=''>{measure.unit}</div> */}</td>
                        </tr>
                      )
                    } else if (measure.unit === 'option') {
                      // split measure.value comma separated string into array
                      const options = measure.value.split(',')
                      return (
                        <tr key={index}>
                          <td>
                            <div class='text-right mr-3'>{measure.label}:</div>
                          </td>
                          <td>
                            <select class='w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'>
                              {options.map((option) => (
                                <option value={option}>{option}</option>
                              ))}
                            </select>
                          </td>
                          <td>{/* <div class=''>{measure.unit}</div> */}</td>
                        </tr>
                      )
                    }
                    return (
                      <tr key={index}>
                        <td>{measure.label}</td>
                        <td>{measure.value}</td>
                        <td>{measure.unit}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <div className='flex gap-3'>
                <div class='flex-1'>
                  <Button text={'BACK'} color={'bg-red-600'} />
                </div>
                <div class='flex-1 text-right'>
                  <Button text={'FINISH'} color={'bg-green-600'} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
