import React from 'react'

import templates from '../constants/template.sample'

export default function Template() {
  return (
    <div class='w-[1000px] mt-[65px] overflow-x-auto relative shadow-md sm:rounded-lg'>
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
              Garment
            </th>
            <th scope='col' class='py-3 px-6'>
              Measurement
            </th>
            <th scope='col' class='py-3 px-6'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template, index) => (
            <tr key={index} class='bg-white border-b  '>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                {template.id}
              </th>
              <td class='py-4 px-6'>{template.name}</td>
              <td class='py-4 px-6'>{template.garment}</td>
              <td class='py-4 px-6'>
                {template.measurement.map((measure) => (
                  <div class='flex'>
                    <div class='mr-2'>{measure.label}:</div>
                    <div class='mr-1'>{measure.value}</div>
                    <div class=''>{measure.unit}</div>
                  </div>
                ))}
              </td>
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
  )
}
