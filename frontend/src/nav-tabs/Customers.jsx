import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { readAll, remove, read } from "../redux/slices/customer.slice"

import AddButton from "../assets/AddButton"
import AddCustomer from "../components/AddCustomer"

export default function Customers() {
  const dispatch = useDispatch()

  const { customers, customer } = useSelector((state) => state.customer)

  useEffect(() => {
    dispatch(readAll())
  }, [dispatch, customer])

  const [addCustomer, setAddCustomer] = useState(false)
  return (
    <>
      {addCustomer ? (
        <div class="flex m-8  mt-20 w-full flex-col items-center gap-10 md:rounded-lg bg-white shadow-2xl shadow-gray-300">
          <AddCustomer />
        </div>
      ) : (
        <button
          class="flex items-center p-2 mt-20 mb-2 mx-auto rounded-md text-base text-gray-500 font-normal hover:bg-slate-200 active:bg-slate-300"
          onClick={() => setAddCustomer(!addCustomer)}
        >
          <AddButton />
          <div>Add Customer</div>
        </button>
      )}
      <div class="w-full overflow-x-auto relative shadow-md sm:rounded-lg bg-white">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Phone
              </th>
              <th scope="col" class="py-3 px-6">
                Place
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {customers &&
              customers
                .slice(0)
                .reverse()
                .map((customer) => (
                  <tr key={customer._id} class="bg-white border-b  ">
                    <td class="py-4 px-6 text-gray-900 font-medium">
                      {customer.name}
                    </td>
                    <td class="py-4 px-6">{customer.phone}</td>
                    <td class="py-4 px-6">{customer.place}</td>
                    <td class="py-4 px-6">
                      <button
                        onClick={() => dispatch(read(customer._id))}
                        class="font-medium text-green-600  hover:underline  mr-5"
                      >
                        Select
                      </button>
                      <button class="font-medium text-blue-600  hover:underline  mr-5">
                        Edit
                      </button>
                      <button
                        onClick={() => dispatch(remove(customer._id))}
                        class="font-medium text-red-600  hover:underline"
                      >
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
