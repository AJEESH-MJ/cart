import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { create, clear } from "../redux/slices/order.slice"
import { readAll as readAllGarments } from "../redux/slices/garment.slice"

import Button from "../assets/Button"
import LineHeading from "../assets/LineHeading"

export default function OrderGarment({ setTab }) {
  const dispatch = useDispatch()

  const { order, errors } = useSelector((state) => state.order)
  const { customer } = useSelector((state) => state.customer)
  const { garments } = useSelector((state) => state.garment)

  useEffect(() => {
    dispatch(readAllGarments())
    if (order) {
      setOrderData(order)
    } else {
      setOrderData({
        //store last garment in garment
        garment: garments && garments[garments.length - 1].name,
        note: "this is a note from customer",
      })
    }
  }, [order, customer])

  const [orderData, setOrderData] = useState({
    garment: "",
    note: "",
  })
  const { garment, note } = orderData

  const onChangeHandler = (e) => {
    setOrderData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const addOrderHandler = () => {
    const someData = {
      garment,
      note,
    }
    dispatch(create(someData))
  }

  const clearOrderHandler = () => {
    setOrderData({
      garment: "",
      note: "",
    })
    dispatch(clear())
  }

  return (
    <>
      {customer ? (
        <div class="flex w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300">
          <div class="text-xl font-semibold text-gray-500 ">Order Garment</div>
          <div class="flex w-[100%] flex-col gap-5">
            {/* <LineHeading text={"Please enter the order details"} /> */}
            <div className="flex items-center">
              <div class="w-32 text-right mr-3">Garmant:</div>
              {order ? (
                <div>{order.garment}</div>
              ) : (
                <select
                  class="w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  value={garment}
                  name="garment"
                  onChange={onChangeHandler}
                >
                  {garments &&
                    garments
                      .slice(0)
                      .reverse()
                      .map((garment) => (
                        <option key={garment._id} value={garment.name}>
                          {garment.name}
                        </option>
                      ))}
                </select>
              )}
            </div>
            <div className="flex items-center">
              <div class="w-32 text-right mr-3">Note:</div>
              {order ? (
                <div>{order.status[1].note}</div>
              ) : (
                <textarea
                  name="note"
                  value={note}
                  onChange={onChangeHandler}
                  type="text"
                  class="w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                />
              )}
            </div>
            <div className="flex flex-col text-sm gap-3 text-red-500">
              {errors &&
                Object.values(errors).map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
            </div>
            <div className="flex justify-between gap-3">
              <div onClick={clearOrderHandler}>
                <Button text={"CLEAR"} color={"bg-red-600"} />
              </div>
              {order ? (
                <div onClick={() => setTab("measure")}>
                  <Button text={"NEXT"} color={"bg-blue-600"} />
                </div>
              ) : (
                <div onClick={addOrderHandler}>
                  <Button text={"ORDER"} color={"bg-green-600"} />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div class="flex w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300">
          <div onClick={() => setTab("add")}>
            <Button text={"ADD CUSTOMER"} color={"bg-red-600"} />
          </div>
        </div>
      )}
    </>
  )
}
