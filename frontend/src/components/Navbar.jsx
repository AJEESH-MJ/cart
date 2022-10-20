import React from 'react'
import Hamburger from '../assets/Hamburger'

export default function Navbar({
  tab,
  name,
  imageURL,
  hidebarHandler,
  logoutHandler,
}) {
  return (
    <nav class='flex items-center gap-3 bg-white py-3 px-6 text-xl font-medium text-gray-700'>
      <div onClick={hidebarHandler}>
        <Hamburger />
      </div>
      <h2 class='flex-1'>{tab || 'Tab'}</h2>
      <h3 class='font-normal'>{name || 'Name'}</h3>
      <div
        onClick={logoutHandler}
        style={{ backgroundImage: `url(${imageURL})` }}
        class='h-10 w-10 bg-cover rounded-full border border-white bg-slate-100 shadow-lg'></div>
    </nav>
  )
}
