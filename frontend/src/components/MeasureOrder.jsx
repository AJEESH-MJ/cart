import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { clear, updateMeasurement } from "../redux/slices/order.slice"
import { readAll, read } from "../redux/slices/template.slice"

import Button from "../assets/Button"
import LineHeading from "../assets/LineHeading"

const MeasureOrder = ({ setTab }) => {
  const dispatch = useDispatch()

  const { order, errors } = useSelector((state) => state.order)
  const { templates, template } = useSelector((state) => state.template)

  const [measurements, setMeasurements] = useState("")

  const onChangeHandler = (e) => {
    setMeasurements((prevState) => {
      const newState = prevState.map((item) => {
        if (item.label === e.target.name) {
          // if value is starting with +
          if (e.target.value.startsWith("+")) {
            // remove the first character
            const newValue = e.target.value.slice(1)
            return { ...item, value: item.value + " " + newValue }
          }
          return { ...item, value: e.target.value }
        }
        return item
      })
      return newState
    })
  }

  const addMeasurementHandler = () => {
    dispatch(updateMeasurement(measurements))
  }

  const clearMeasurementHandler = () => {
    setMeasurements("")
    dispatch(clear())
  }

  useEffect(() => {
    //if order exist
    if (order && order.measurement.length > 0) {
      setMeasurements(order.measurement)
    } else if (template) {
      setMeasurements(template.measurement)
    }
    dispatch(readAll())
  }, [template, order])

  return (
    <>
      <div class="flex w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300">
        <div class="text-xl font-semibold text-gray-500 ">Add Measurement</div>
        <div class="flex w-[100%] flex-col gap-5">
          <div className="flex justify-center items-center gap-3">
            <label class="mr-3 text-gray-500 text-xl font-medium">
              Template :
            </label>
            <select
              class=" rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              onChange={(e) => dispatch(read(e.target.value))}
            >
              {templates &&
                templates
                  .slice(0)
                  .reverse()
                  .map((item) => <option value={item._id}>{item.name}</option>)}
            </select>
          </div>
          <LineHeading text={"Please enter the measurements"} />
          <table class="table-auto text-gray-600 font-semibold">
            <tbody>
              {measurements &&
                measurements.map((measure, index) => {
                  // split measure.option into array and clean both sides by removing spaces
                  const options = measure.option.split(",").map((item) => {
                    return item.trim()
                  })
                  return (
                    <tr key={index}>
                      <td>
                        <div class="text-right mr-3">{measure.label}:</div>
                      </td>
                      <td className="flex">
                        <input
                          class="w-1/3 rounded border border-solid border-gray-300 bg-gray-100 bg-clip-padding px-4 py-2 text-xl font-semibold text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          name={measure.label}
                          onChange={onChangeHandler}
                          value={measure.value}
                          type="text"
                        />
                        <div className="flex w-full gap-1 px-1">
                          {options.map((option, index) => (
                            <div key={index} className="flex-1 ">
                              <input
                                class="bg-gray-200"
                                type="radio"
                                name={measure.label}
                                onChange={onChangeHandler}
                                value={option}
                                id={measure.label + option}
                                class="hidden"
                                checked="false"
                              />
                              <label
                                for={measure.label + option}
                                class="h-full flex items-center justify-center  hover:bg-gray-100 overflow-clip cursor-pointer select-none rounded border text-center font-medium"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
          <div className="flex gap-3  justify-between">
            <div className="flex gap-3">
              <div class="flex-1" onClick={() => setTab("order")}>
                <Button text={"BACK"} color={"bg-blue-600"} />
              </div>
              {/* <div class="flex-1" onClick={() => setTab("order")}>
                <Button text={"CLEAR"} color={"bg-red-600"} />
            </div> */}
            </div>
            <div className="flex gap-3">
              {/* <div class="flex-1 text-right" onClick={addMeasurementHandler}>
                <Button text={"UPDATE"} color={"bg-blue-600"} />
              </div> */}
              <div class="flex-1 text-right" onClick={addMeasurementHandler}>
                <Button text={"UPDATE & PREVIEW"} color={"bg-green-600"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MeasureOrder
