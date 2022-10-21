import React from 'react'

import customers from '../constants/customer.sample'

export default function Customers() {
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
          {customers.map((customer, index) => (
            <tr key={index} class='bg-white border-b  '>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '>
                {customer.id}
              </th>
              <td class='py-4 px-6'>{customer.name}</td>
              <td class='py-4 px-6'>{customer.phone}</td>
              <td class='py-4 px-6'>{customer.place}</td>
              <td class='py-4 px-6'>
                <button class='font-medium text-green-600  hover:underline'>
                  Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
