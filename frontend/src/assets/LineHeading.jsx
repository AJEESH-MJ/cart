import React from 'react'

export default function LineHeading({ text }) {
  return (
    <div class='flex items-center after:mt-0.5 after:flex-1 after:border-t after:border-gray-300'>
      <p class='mr-4 mb-0 text-center text-gray-400'>{text}</p>
    </div>
  )
}
