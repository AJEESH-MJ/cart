import React from "react"

import NavButton from "../assets/NavButton"
import Profile from "./Profile"

export default function Sidebar({ hidebarHandler, staff, tab, setTab }) {
  return (
    <div class="flex w-full flex-col items-center gap-8">
      <div class="title text-lg font-medium tracking-widest text-gray-600">
        TAILOR SHOP
      </div>
      <div
        class="absolute md:hidden right-4 text-gray-500 top-4 font-semibold scale-x-125"
        onClick={hidebarHandler}
      >
        X
      </div>
      <Profile
        name={staff && staff.name}
        imageURL={staff && staff.imageURL}
        role={staff && staff.role}
      />
      <div class="navigation w-full flex-1 text-gray-500 p-4 text-base font-medium">
        <NavButton text={"Work"} tab={tab} setTab={setTab} />
        <div class="flex flex-col gap-1 py-5">
          <div class="text-xs font-bold text-gray-400">--DASHBOARD</div>
          <NavButton text={"Customers"} tab={tab} setTab={setTab} />
          <NavButton text={"Orders"} tab={tab} setTab={setTab} />
          <NavButton text={"Garments"} tab={tab} setTab={setTab} />
          <NavButton text={"Template"} tab={tab} setTab={setTab} />
          <NavButton text={"Staffs"} tab={tab} setTab={setTab} />
        </div>
        <div class="flex flex-col gap-1 py-5">
          <div class="text-xs font-bold text-gray-400">--WORKFLOW</div>
          {/* <NavButton text={'Measuring'} tab={tab} setTab={setTab} />
          <NavButton text={'Cutting'} tab={tab} setTab={setTab} />
          <NavButton text={'Stitching'} tab={tab} setTab={setTab} /> */}
        </div>
      </div>
    </div>
  )
}
