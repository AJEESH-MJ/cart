import React from 'react'

export default function Button({ text }) {
  return (
    <button
      type='button'
      class='`inline-block rounded bg-slate-600 px-7 py-3 text-sm font-medium leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-slate-500 hover:shadow-lg focus:bg-slate-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg`'>
      {text || 'Button'}
    </button>
  )
}
