import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import AddCustomer from "../components/AddCustomer"
import OrderGarment from "../components/OrderGarment"
import MeasureOrder from "../components/MeasureOrder"
import PreviewOrder from "../components/PreviewOrder"

export default function Work() {
  const dispatch = useDispatch()

  const { customer } = useSelector((state) => state.customer)
  const { order } = useSelector((state) => state.order)

  const [tab, setTab] = useState("add")
  useEffect(() => {
    if (!customer) {
      setTab("add")
    } else if (!order) {
      setTab("order")
    } else {
      setTab("measure")
    }
  }, [customer, order])

  return (
    <>
      <div class="flex items-center gap-2  m-8  mt-24">
        <div
          class={`${
            tab === "add" ? "h-8 w-8  bg-green-500" : "h-6 w-6  bg-gray-300"
          } rounded-full`}
          onClick={() => setTab("add")}
        ></div>
        <div class="h-1 w-20  bg-gray-300 rounded-full"></div>
        <div
          class={`${
            tab === "order" ? "h-8 w-8  bg-green-500" : "h-6 w-6  bg-gray-300"
          } rounded-full`}
          onClick={() => setTab("order")}
        ></div>
        <div class="h-1 w-20  bg-gray-300 rounded-full"></div>
        <div
          class={`${
            tab === "measure" ? "h-8 w-8  bg-green-500" : "h-6 w-6  bg-gray-300"
          } rounded-full`}
          onClick={() => setTab("measure")}
        ></div>
        <div class="h-1 w-20  bg-gray-300 rounded-full"></div>
        <div
          class={`${
            tab === "preview" ? "h-8 w-8  bg-green-500" : "h-6 w-6  bg-gray-300"
          } rounded-full`}
          onClick={() => setTab("preview")}
        ></div>
      </div>
      {tab === "add" && <AddCustomer />}
      {tab === "order" && <OrderGarment setTab={setTab} />}
      {tab === "measure" && <MeasureOrder setTab={setTab} />}
      {tab === "preview" && <PreviewOrder setTab={setTab} />}
    </>
  )
}
