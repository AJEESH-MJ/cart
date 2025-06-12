import React, { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { getProfile, logout, reset } from "../redux/slices/staff.slice"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

import Customers from "../nav-tabs/Customers"
import Garments from "../nav-tabs/Garments"
import Orders from "../nav-tabs/Orders"
import Staffs from "../nav-tabs/Staffs"
import Work from "../nav-tabs/Work"
import Template from "../nav-tabs/Template"
import Invoice from "../nav-tabs/Invoice"
export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { staff, errors } = useSelector((state) => state.staff)

  // dispatch(getProfile()).then(() => {
  //   if (!staff) {
  //     navigate('/login')
  //   }
  // })
  useEffect(() => {
    if (!staff) {
      navigate("/login")
    }
  }, [navigate, staff])

  const logoutHandler = () => {
    dispatch(logout())
  }

  const [hidebar, setHidebar] = useState(false)

  const hidebarHandler = () => {
    setHidebar(!hidebar)
  }

  const [tab, setTab] = useState("Work")

  console.log(errors)
  return (
    <div className="flex h-screen w-full">
      <aside
        className={`absolute shadow-hidebar md:shadow-none ${
          hidebar && "hidden"
        } md:static h-full w-full md:w-[250px] flex-col items-center gap-8 border-r border-slate-200 bg-white pt-6 z-[100] `}
      >
        <Sidebar staff={staff && staff} hidebarHandler={hidebarHandler} tab={tab} setTab={setTab} />
      </aside>
      <main className="flex flex-1 flex-col overflow-y-scroll w-full">
        <Navbar
          tab={tab}
          name={staff && staff.name}
          imageURL={staff && staff.imageURL}
          hidebarHandler={hidebarHandler}
          logoutHandler={logoutHandler}
        />
        <section className="shadow-inset flex flex-col flex-1 items-center bg-slate-100 text-xl md:px-5 lg:px-20 xl:px-40">
          {tab === "Work" && <Work />}
          {tab === "Invoice" && <Invoice />}
          {tab === "Customers" && <Customers />}
          {tab === "Orders" && <Orders />}
          {tab === "Garments" && <Garments />}
          {tab === "Template" && <Template />}
          {tab === "Staffs" && <Staffs />}
        </section>
      </main>
    </div>
  )
}
