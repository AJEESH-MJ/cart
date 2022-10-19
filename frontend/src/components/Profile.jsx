import React from 'react'

export default function Profile({ name, role, imageURL }) {
  return (
    <div class='flex flex-col items-center gap-2'>
      <div
        style={{ backgroundImage: `url(${imageURL})` }}
        class={`h-20 bg-cover w-20 rounded-lg border-2 border-white shadow-xl`}></div>
      <div class='text-center text-gray-600'>
        <div class='text-sm font-medium uppercase tracking-normal'>
          {name || 'Name'}
        </div>
        <p class='text-xs'>{role || 'Role'}</p>
      </div>
    </div>
  )
}
