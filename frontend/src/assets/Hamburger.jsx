import React from 'react'

export default function Hamburger() {
  return (
    <button class=' hover:bg-slate-100 active:bg-slate-200 p-2 rounded'>
      <svg
        width='18'
        height='12'
        viewBox='0 0 18 12'
        fill='#475569'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18 2H0V0H18V2ZM18 7H0V5H18V7ZM0 12H18V10H0V12Z'
        />
      </svg>
    </button>
  )
}
