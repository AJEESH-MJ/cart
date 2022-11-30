import React from "react"

import templates from "../constants/template.sample"

export default function Template() {
  return (
    <div class="w-full mt-[65px] overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" class="py-3 px-6">
              Id
            </th>
            <th scope="col" class="py-3 px-6">
              Name
            </th>
            <th scope="col" class="py-3 px-6">
              Garment
            </th>
            <th scope="col" class="py-3 px-6">
              Measurement
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {templates
            .slice(0)
            .reverse()
            .map((template, index) => (
              <tr key={index} class="bg-white border-b  ">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  {template.id}
                </th>
                <td class="py-4 px-6">{template.name}</td>
                <td class="py-4 px-6">{template.garment}</td>
                <td class="py-4 px-6">
                  {/* // create a table for measurement // headings are label,
                  value, unit // map through the measurement array // create a
                  row for each measurement */}
                  <table>
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Value</th>
                        <th>Unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {template.measurement.map((measure) => {
                        if (measure.unit === "inch") {
                          return (
                            <tr key={index}>
                              <td>
                                <div class="mr-2">{measure.label}:</div>
                              </td>
                              <td>
                                <input
                                  class="w-full border border-solid"
                                  type="text"
                                  value={measure.value}
                                />
                              </td>
                              <td>
                                <div class="">{measure.unit}</div>
                              </td>
                            </tr>
                          )
                        } else if (measure.unit === "option") {
                          // split measure.value comma separated string into array
                          const options = measure.value.split(",")
                          return (
                            <tr key={index}>
                              <td>
                                <div class="mr-2">{measure.label}:</div>
                              </td>
                              <td>
                                <select class="w-full border border-solid">
                                  {options.map((option) => (
                                    <option value={option}>{option}</option>
                                  ))}
                                </select>
                              </td>
                              <td>
                                <div class="">{measure.unit}</div>
                              </td>
                            </tr>
                          )
                        }
                        return (
                          <tr key={index}>
                            <td>{measure.label}</td>
                            <td>{measure.value}</td>
                            <td>{measure.unit}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </td>
                <td class="py-4 px-6">
                  <button class="font-medium text-blue-600  hover:underline mr-5">
                    edit
                  </button>
                  <button class="font-medium text-red-600  hover:underline">
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
