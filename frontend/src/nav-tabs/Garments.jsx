import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { readAll, create, remove } from '../redux/slices/garment.slice'

import AddButton from '../assets/AddButton'
import Button from '../assets/Button'
import LineHeading from '../assets/LineHeading'

import seedGarments from '../constants/garment.sample'
// const garment = {
//   id: '1234-5678-1',
//   name: 'John Doe'
// }

export default function Garments() {
  const dispatch = useDispatch()

  const { garments, garment, errors } = useSelector((state) => state.garment)

  useEffect(() => {
    dispatch(readAll())
  }, [dispatch, garment])

  const [garmentData, setGarmentData] = useState({
    name: '',
  })
  const { name } = garmentData

  const onChangeHandler = (e) => {
    setGarmentData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const addGarmentHandler = () => {
    const garment = {
      name,
    }
    dispatch(create(garment))
  }

  const seedGarmentHandler = () => {
    seedGarments.forEach((garment) => {
      dispatch(create(garment))
    })
  }

  const [addGarment, setAddGarment] = useState(false)
  return (
    <>
      {addGarment ? (
        <>
          <div class='flex m-8  mt-20 w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300'>
            <div class='text-xl font-semibold text-gray-500 '>Add Garment</div>
            <div class='flex w-[100%] flex-col gap-5'>
              <LineHeading text={'Please enter the garment details'} />
              <input
                name='name'
                value={name}
                onChange={onChangeHandler}
                type='text'
                class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
                placeholder='Name'
              />
              <div className='flex flex-col text-sm gap-3 text-red-500'>
                {errors && Object.values(errors).map((error) => <p>{error}</p>)}
              </div>
              <div className='flex gap-3'>
                <div class='flex-1' onClick={() => setAddGarment(!addGarment)}>
                  <Button text={'CANCEL'} color={'bg-red-600'} />
                </div>
                <div class='flex-1 text-right' onClick={seedGarmentHandler}>
                  <Button text={'SEED'} color={'bg-green-600'} />
                </div>
                <div class='flex-1 text-right' onClick={addGarmentHandler}>
                  <Button text={'ADD'} color={'bg-green-600'} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <button
          class='flex items-center p-2 mt-20 mb-2 mx-auto rounded-md text-base text-gray-500 font-normal hover:bg-slate-200 active:bg-slate-300'
          onClick={() => setAddGarment(!addGarment)}>
          <AddButton />
          <div>Add Garment</div>
        </button>
      )}
      <div class='w-full overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table class='w-full text-sm text-left text-gray-500 '>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50  '>
            <tr>
              <th scope='col' class='py-3 px-6'>
                Name
              </th>
              <th scope='col' class='py-3 px-6'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {garments &&
              garments
                .slice(0)
                .reverse()
                .map((garment, index) => (
                  <tr key={index} class='bg-white border-b  '>
                    <td class='py-4 px-6 font-medium text-gray-900'>
                      {garment.name}
                    </td>
                    <td class='py-4 px-6'>
                      <button class='font-medium text-blue-600  hover:underline mr-5'>
                        edit
                      </button>
                      <button
                        onClick={() => dispatch(remove(garment._id))}
                        class='font-medium text-red-600  hover:underline'>
                        delete
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
