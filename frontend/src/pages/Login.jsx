import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/slices/staff.slice'

import Button from '../assets/Button'
import LineHeading from '../assets/LineHeading'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { staff, errors } = useSelector((state) => state.staff)

  useEffect(() => {
    if (staff) {
      navigate('/')
    }
  }, [navigate, staff])

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
    <div className='flex w-[600px] flex-col items-center gap-10 rounded-lg bg-white px-20 py-5 shadow-2xl shadow-gray-300'>
      <div className='text-xl font-semibold'>Login Page</div>
      <div className='flex w-[100%] flex-col gap-5'>
        <LineHeading text={'Please login to your account'} />
        <div className=''>
          <input
            name='phone'
            value={phone}
            onChange={onChangeHandler}
            type='text'
            className='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
            placeholder='Phone number'
          />
        </div>
        <div className=''>
          <input
            name='password'
            value={password}
            onChange={onChangeHandler}
            type='password'
            className='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
            placeholder='Password'
          />
        </div>
        <div className='flex flex-col text-sm gap-3 text-red-500'>
          {errors &&
            Object.values(errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
        </div>
        <div onClick={loginHandler} className='text-center'>
          <Button text={'LOGIN'} color={'bg-slate-600'} />
        </div>
      </div>
      <div>
        Don't have an account yet? <Button
          text="Register"
          color="bg-slate-600"
          onClick={() => navigate('/register')}
        />
      </div>
    </div>
  )
}
