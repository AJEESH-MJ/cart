import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../redux/slices/staff.slice'

import Button from '../assets/Button'

// data = {
//   name: 'staff1',
//   phone: '1234567890',
//   password: '1234',
//   role: 'admin',
//   imageURL: 'https://www.google.com',
// }

export default function Register() {
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
    name: '',
    phone: '',
    password: '',
    repeatPassword: '',
    role: '',
    imageURL: '',
  })

  const { name, phone, password, repeatPassword, role, imageURL } = loginData

  const onChangeHandler = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const RegisterHandler = () => {
    const staff = {
      name,
      phone,
      password,
      repeatPassword,
      role,
      imageURL,
    }
    dispatch(register(staff))
  }

  return (
    <div class='flex w-[600px] flex-col items-center gap-10 rounded-lg bg-white px-20 py-5 shadow-2xl shadow-gray-300'>
      <div class='text-xl font-semibold'>Login Page</div>
      <div class='flex w-[100%] flex-col gap-5'>
        <div class='flex items-center after:mt-0.5 after:flex-1 after:border-t after:border-gray-300'>
          <p class='mr-4 mb-0 text-center font-medium text-slate-600'>
            Please register to your account
          </p>
        </div>
        {/* name */}
        <div class=''>
          <input
            name='name'
            value={name}
            onChange={onChangeHandler}
            type='text'
            class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
            placeholder='Name'
          />
        </div>
        {/* phone */}
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
        {/* password */}
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
        {/*repeat password */}
        <div class=''>
          <input
            name='repeatPassword'
            value={repeatPassword}
            onChange={onChangeHandler}
            type='password'
            class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
            placeholder='Repeat Password'
          />
        </div>
        {/* role */}
        <div class=''>
          <input
            name='role'
            value={role}
            onChange={onChangeHandler}
            type='text'
            class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
            placeholder='Role'
          />
        </div>
        {/* imageURL */}
        <div class=''>
          <input
            name='imageURL'
            value={imageURL}
            onChange={onChangeHandler}
            type='text'
            class='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-gray-600 focus:bg-white focus:text-gray-700 focus:outline-none'
            placeholder='Image URL'
          />
        </div>
        <div onClick={RegisterHandler} class='text-center'>
          <Button text={'REGISTER'} />
        </div>
      </div>
      Don't have an account yet?
    </div>
  )
}
