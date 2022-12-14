import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { readAll } from "../redux/slices/template.slice"

export default function Template() {
  const dispatch = useDispatch()

  const { templates, template } = useSelector((state) => state.template)

  useEffect(() => {
    dispatch(readAll())
    console.log("templates", templates)
  }, [dispatch, template])

  return (
    <div class="w-full mt-[100px] overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
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
          {templates &&
            templates
              .slice(0)
              .reverse()
              .map((template) => (
                <tr key={template._id} class="bg-white border-b  ">
                  <td class="py-4 px-6">{template.name}</td>
                  <td class="py-4 px-6">{template.garment}</td>
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
                        {template.measurement.map((measure) => {
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
                    <button class="font-medium text-green-600  hover:underline mr-5">
                      Select
                    </button>
                    <button class="font-medium text-blue-600  hover:underline mr-5">
                      Edit
                    </button>
                    <button class="font-medium text-red-600  hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}
