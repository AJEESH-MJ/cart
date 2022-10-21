import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <div className='App'>
      <div class='relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-100'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
    </div>
  )
}
