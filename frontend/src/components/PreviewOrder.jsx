import React, { useState, useEffect, useRef } from "react"
import { useReactToPrint } from "react-to-print"

import { useDispatch, useSelector } from "react-redux"

const PreviewOrder = () => {
  // newline in javascript is a backslash followed by a newline character \n
  const { order } = useSelector((state) => state.order)
  const { customer } = useSelector((state) => state.customer)
  // convert objects in order.measurement array to string
  const measurement = order.measurement.map((item) => {
    return JSON.stringify(item)
  })
  // convert measurement array to string separated by newline character
  const measurementString = measurement.join(
    "---------------------------------"
  )
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print Page",
  })
  return (
    <>
      <div class="w-[500px] overflow-clip bg-white relative shadow-md sm:rounded-lg">
        <div ref={componentRef} class="flex flex-col gap-1 border p-1">
          <div class="flex text-xl font-normal">
            <div class="flex-1">
              <div class="flex items-center justify-center border p-5 text-3xl font-normal">
                Al-Sadara
              </div>
              <div class="flex items-center justify-center border p-1">
                DATE: 09-06-22
              </div>
            </div>
            <div class="flex-1">
              <div class="flex h-full items-center justify-center border font-bold">
                Inv: 3760
              </div>
            </div>
          </div>
          {/* grid with 3 column responsive */}
          <div class="grid grid-cols-3 gap-1">
            {
              // map order.measurement array to jsx
              order.measurement.map((item) => {
                return (
                  <div class="flex-1">
                    <div class="flex h-full items-center justify-center border p-2 text-center">
                      {item.label} <br />
                      {item.value}
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div class="flex text-xl font-normal">
            <div class="flex-1 flex items-center justify-center border p-1">
              Price: {order.price}
            </div>
            <div class="flex-[5] flex items-center justify-center border">
              Name: {customer.name}
            </div>
          </div>
          <div class="flex-[5] flex items-center justify-center border">
            Due Date: 09-06-22
          </div>
        </div>
      </div>
      <div class="absolute w-full flex bottom-0 p-5">
        <button
          class="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrint}
        >
          Print this out!
        </button>
      </div>
    </>
  )
}

export default PreviewOrder
