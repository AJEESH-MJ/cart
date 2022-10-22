import React from 'react'

export default function AddButton() {
  return (
    <div class='p-2'>
      <svg
        width='20'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='7.5' cy='7.5' r='7' fill='#D9D9D9' stroke='#6B6B6B' />
        <line x1='3' y1='7.5' x2='12' y2='7.5' stroke='#6B6B6B' />
        <line x1='7.5' y1='12' x2='7.5' y2='3' stroke='#6B6B6B' />
      </svg>
    </div>
  )
}
