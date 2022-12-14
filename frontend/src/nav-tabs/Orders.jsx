import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { readAll, read, remove } from "../redux/slices/order.slice"
import { readAll as readAllCustomer } from "../redux/slices/customer.slice"

export default function Orders() {
  const dispatch = useDispatch()

  const { orders, order } = useSelector((state) => state.order)
  const { customers, customer } = useSelector((state) => state.customer)

  useEffect(() => {
    dispatch(readAll())
    dispatch(readAllCustomer())
  }, [dispatch, order, customer])

  return (
    <div class="w-full mt-[100px] overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" class="py-3 px-6">
              Customer
            </th>
            <th scope="col" class="py-3 px-6">
              Garment
            </th>
            <th scope="col" class="py-3 px-6">
              Measurement
            </th>
            <th scope="col" class="py-3 px-6">
              Status
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders
              .slice(0)
              .reverse()
              .map((order) => {
                // select customer name from customers list
                const customerData =
                  customers &&
                  customers.find(
                    (customer) => customer._id === order.customer_id
                  )
                const customer_name = customerData && customerData.name
                return (
                  <tr key={order._id} class="bg-white border-b  ">
                    <td class="py-4 px-6">
                      {customerData ? (
                        <>
                          <h1>{"name : " + customerData.name}</h1>
                          <h2>{"phone : " + customerData.phone}</h2>
                          <h3>{"place : " + customerData.place}</h3>
                        </>
                      ) : (
                        "NILL"
                      )}
                    </td>
                    <td class="py-4 px-6">{order.garment}</td>
                    <td class="py-4 px-6">
                      <table>
                        <thead>
                          <tr>
                            <th>Label</th>
                            <th>Value</th>
                            <th>Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.measurement.map((measure) => {
                            return (
                              <tr key={measure._id}>
                                <td>{measure.label}</td>
                                <td>{measure.value}</td>
                                <td>{measure.option}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </td>
                    <td class="py-4 px-6">
                      <table>
                        <thead>
                          <tr>
                            <th>Job</th>
                            <th>Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.status.map((stat) => {
                            return (
                              <tr key={stat._id}>
                                <td>{stat.job}</td>
                                <td>{stat.note}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </td>
                    <td class="py-4 px-6">
                      <button
                        class="font-medium text-green-600  hover:underline mr-5"
                        onClick={() => dispatch(read(order._id))}
                      >
                        Select
                      </button>
                      <button class="font-medium text-blue-600  hover:underline mr-5">
                        Edit
                      </button>
                      <button
                        class="font-medium text-red-600  hover:underline"
                        onClick={() => dispatch(remove(order._id))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
        </tbody>
      </table>
    </div>
  )
}
