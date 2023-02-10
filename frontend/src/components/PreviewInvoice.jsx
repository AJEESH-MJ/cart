import React, { useRef } from "react"
import { useReactToPrint } from "react-to-print"

import { useSelector } from "react-redux"

export default function PreviewInvoice() {
  const { invoice } = useSelector((state) => state.invoice)
  const { customer } = useSelector((state) => state.customer)
  console.log(invoice)
  // todays date
  const date = new Date()
  const dd = String(date.getDate()).padStart(2, "0")
  const mm = String(date.getMonth() + 1).padStart(2, "0") //January is 0!
  const yyyy = date.getFullYear()
  const today = mm + "/" + dd + "/" + yyyy

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print Page",
  })

  return (
    <>
      <div class="w-[500px] mx-auto text-base">
        <div ref={componentRef} class="p-8 bg-white shadow-md rounded-lg">
          <h1 class="text-3xl font-bold mb-6">Invoice</h1>
          <div class="flex items-center mb-4">
            <div class="w-1/4 font-bold text-gray-700">Date:</div>
            <div class="w-3/4 text-gray-800">{today}</div>
          </div>
          <div class="flex items-center mb-4">
            <div class="w-1/4 font-bold text-gray-700">To:</div>
            <div class="w-3/4 text-gray-800">{customer.name}</div>
          </div>
          <table class="table-auto w-full">
            <thead>
              <tr>
                <th class="border-b px-4 py-2 text-left text-gray-700 font-bold">Item</th>
                <th class="border-b px-4 py-2 text-left text-gray-700 font-bold">Quantity</th>
                <th class="border-b px-4 py-2 text-right text-gray-700 font-bold">Price</th>
                <th class="border-b px-4 py-2 text-right text-gray-700 font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              {
                // map invoice products
                invoice.products.map((product) => {
                  return (
                    <tr>
                      <td class="border-b px-4 py-2 text-left text-gray-800">{product.item}</td>
                      <td class="border-b px-4 py-2 text-left text-gray-800">{product.quantity}</td>
                      <td class="border-b px-4 py-2 text-right text-gray-800">{product.price}</td>
                      <td class="border-b px-4 py-2 text-right text-gray-800">
                        {product.price * product.quantity}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <div class="flex items-center mt-6">
            <div class="w-1/4 font-bold text-gray-700">Total:</div>
            <div class="w-3/4 text-gray-800 text-right">{invoice.total}</div>
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
