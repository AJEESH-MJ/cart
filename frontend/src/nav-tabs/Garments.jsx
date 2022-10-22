import React, { useState } from 'react'

import AddButton from '../assets/AddButton'
import Button from '../assets/Button'
import Input from '../assets/Input'
import LineHeading from '../assets/LineHeading'

import garments from '../constants/garment.sample'

export default function Garments() {
  const [addGarment, setAddGarment] = useState(false)
  return (
    <>
      {addGarment ? (
        <>
          <div class='flex m-8  mt-20 w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300'>
            <div class='text-xl font-semibold text-gray-500 '>Add Garment</div>
            <div class='flex w-[100%] flex-col gap-5'>
              <LineHeading text={'Please enter the garment details'} />
              <Input text={'Name'} />
              <div className='flex gap-3'>
                <div class='flex-1' onClick={() => setAddGarment(!addGarment)}>
                  <Button text={'CANCEL'} color={'bg-red-600'} />
                </div>
                <div
                  class='flex-1 text-right'
                  onClick={() => setAddGarment(!addGarment)}>
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
                Id
              </th>
              <th scope='col' class='py-3 px-6'>
                Name
              </th>
              <th scope='col' class='py-3 px-6'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {garments.map((garment, index) => (
              <tr key={index} class='bg-white border-b  '>
                <th
                  scope='row'
                  class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                  {garment.id}
                </th>
                <td class='py-4 px-6'>{garment.name}</td>
                <td class='py-4 px-6'>
                  <button class='font-medium text-blue-600  hover:underline mr-5'>
                    edit
                  </button>
                  <button class='font-medium text-red-600  hover:underline'>
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
