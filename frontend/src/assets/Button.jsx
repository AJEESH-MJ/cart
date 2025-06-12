import React from 'react'

export default function Button({ text, color, onClick }) {
  return (
    <button
      onClick={onClick}
      type='button'
      class={`inline-block rounded ${color} bg-opacity-80 px-7 py-3 text-sm font-medium leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-opacity-90 hover:shadow-lg focus:opacity-50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-opacity-100 active:shadow-lg`}>
      {text || 'Button'}
    </button>
  )
}
