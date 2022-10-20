import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../redux/slices/staff.slice'

import Button from '../assets/Button'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { staff, errors } = useSelector((state) => state.staff)

  useEffect(() => {
    console.log(staff)
    console.log(errors)

    if (staff) {
      navigate('/')
    }

    dispatch(reset())
  }, [navigate, staff, dispatch, errors])

  const [loginData, setLoginData] = useState({
    phone: '',
    password: '',
  })

  const { phone, password } = loginData

  const onChangeHandler = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const loginHandler = () => {
    const staff = {
      phone,
      password,
    }
    dispatch(login(staff))
  }

  return (
    <div class='flex w-[600px] flex-col items-center gap-10 rounded-lg bg-white px-20 py-5 shadow-2xl shadow-gray-300'>
      <div class='text-xl font-semibold'>Login Page</div>
      <div class='flex w-[100%] flex-col gap-5'>
        <div class='flex items-center after:mt-0.5 after:flex-1 after:border-t after:border-gray-300'>
          <p class='mr-4 mb-0 text-center font-medium text-slate-600'>
            Please login to your account
          </p>
        </div>
        <div class=''>
          <input
            name='phone'
            value={phone}
            onChange={onChangeHandler}
            type='text'
            class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
            placeholder='Phone number'
          />
        </div>
        <div class=''>
          <input
            name='password'
            value={password}
            onChange={onChangeHandler}
            type='password'
            class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
            placeholder='Password'
          />
        </div>
        <div onClick={loginHandler} class='text-center'>
          <Button text={'LOGIN'} />
        </div>
      </div>
      Don't have an account yet?
    </div>
  )
}
