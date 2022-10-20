import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../redux/slices/staff.slice'

import NavButton from '../assets/NavButton'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

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
    console.log('fadsagd')
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
  let imageURL = '/images/noufal.jpg'

  return (
    <div class='flex h-screen w-full'>
      <aside
        class={`absolute shadow-hidebar md:shadow-none ${
          hidebar && 'hidden'
        } md:static h-full w-[250px] flex-col items-center gap-8 border-r border-slate-200 bg-white pt-6`}>
        <div class='flex w-full flex-col items-center gap-8'>
          <div class='title text-lg font-medium tracking-widest text-gray-600'>
            TAILOR SHOP
          </div>
          <div
            class='absolute md:hidden right-4 text-gray-500 top-4 font-semibold scale-x-125'
            onClick={hidebarHandler}>
            X
          </div>
          <Profile
            name={staff && staff.name}
            imageURL={imageURL}
            role={staff && staff.role}
          />
          <div class='navigation w-full flex-1 text-gray-500 p-4 text-base font-medium'>
            <NavButton text={'Work'} tab={tab} setTab={setTab} />
            <div class='flex flex-col gap-1 py-5'>
              <div class='text-xs font-bold text-gray-400'>--DASHBOARD</div>
              <NavButton text={'Customers'} tab={tab} setTab={setTab} />
              <NavButton text={'Orders'} tab={tab} setTab={setTab} />
              <NavButton text={'Staffs'} tab={tab} setTab={setTab} />
              <NavButton text={'Garments'} tab={tab} setTab={setTab} />
            </div>
            <div class='flex flex-col gap-1 py-5'>
              <div class='text-xs font-bold text-gray-400'>--WORKFLOW</div>
              <NavButton text={'Measuring'} tab={tab} setTab={setTab} />
              <NavButton text={'Cutting'} tab={tab} setTab={setTab} />
              <NavButton text={'Stitching'} tab={tab} setTab={setTab} />
            </div>
          </div>
        </div>
      </aside>

      <main class='flex flex-1 flex-col'>
        <Navbar
          tab={tab}
          name={staff && staff.role}
          imageURL={imageURL}
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
