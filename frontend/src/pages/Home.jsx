import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../redux/slices/staff.slice'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import Customers from './Customers'
import Garments from './Garments'
import Orders from './Orders'
import Staffs from './Staffs'
import Work from './Work'

export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { staff, errors } = useSelector((state) => state.staff)

  useEffect(() => {
    console.log(staff)
    console.log(errors)
    if (!staff) {
      navigate('/login')
    }

    dispatch(reset())
  }, [navigate, staff, dispatch, errors])

  const logoutHandler = () => {
    dispatch(logout())
  }

  const [hidebar, setHidebar] = useState(false)

  const hidebarHandler = () => {
    setHidebar(!hidebar)
  }

  const [tab, setTab] = useState('Work')

  return (
    <div class='flex h-screen w-full'>
      <aside
        class={`absolute shadow-hidebar md:shadow-none ${
          hidebar && 'hidden'
        } md:static h-full w-[250px] flex-col items-center gap-8 border-r border-slate-200 bg-white pt-6`}>
        <Sidebar
          staff={staff && staff}
          hidebarHandler={hidebarHandler}
          tab={tab}
          setTab={setTab}
        />
      </aside>

      <main class='flex flex-1 flex-col'>
        <Navbar
          tab={tab}
          name={staff && staff.name}
          imageURL={staff && staff.imageURL}
          hidebarHandler={hidebarHandler}
          logoutHandler={logoutHandler}
        />
        {tab === 'Work' && <Work />}
        {tab === 'Customers' && <Customers />}
        {tab === 'Orders' && <Orders />}
        {tab === 'Staffs' && <Staffs />}
        {tab === 'Garments' && <Garments />}
      </main>
    </div>
  )
}
