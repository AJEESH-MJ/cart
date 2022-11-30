import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { create, update } from "../redux/slices/customer.slice"

import Button from "../assets/Button"
import LineHeading from "../assets/LineHeading"

export default function AddCustomer() {
  const dispatch = useDispatch()

  const { customer, errors } = useSelector((state) => state.customer)

  useEffect(() => {
    if (customer) {
      setCustomerData(customer)
    }
  }, [customer])

  const [customerData, setCustomerData] = useState({
    name: "",
    phone: "",
    place: "",
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

  const updateCustomerHandler = () => {
    const customer = {
      name,
      phone,
      place,
    }
    dispatch(update(customer))
  }

  return (
    <div class="flex w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300">
      <div class="text-xl font-semibold text-gray-500 ">Add Customer</div>
      <div class="flex w-full flex-col gap-5">
        <LineHeading text={"Please enter the customers details"} />
        <input
          name="name"
          value={name}
          onChange={onChangeHandler}
          type="text"
          class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          placeholder="Name"
        />
        <input
          name="phone"
          value={phone}
          onChange={onChangeHandler}
          type="text"
          class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          placeholder="Phone"
        />
        <input
          name="place"
          value={place}
          onChange={onChangeHandler}
          type="text"
          class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          placeholder="Place"
        />
        <div className="flex flex-col text-sm gap-3 text-red-500">
          {errors &&
            Object.values(errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
        </div>
        {customer ? (
          <div className="flex justify-between gap-3">
            <div onClick={updateCustomerHandler}>
              <Button text={"CLEAR"} color={"bg-red-600"} />
            </div>
            <div onClick={updateCustomerHandler}>
              <Button text={"UPDATE"} color={"bg-blue-600"} />
            </div>
          </div>
        ) : (
          <div className="flex justify-end gap-3">
            <div onClick={addCustomerHandler}>
              <Button text={"ADD"} color={"bg-green-600"} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
