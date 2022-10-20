import React from 'react'

export default function NavButton({ text, tab, setTab }) {
  return (
    <div
      class={`flex w-full gap-2 rounded py-2 px-3 ${
        tab === text && 'bg-slate-200'
      } hover:bg-slate-100 active:bg-slate-200`}
      onClick={() => setTab(text)}>
      <svg
        width='15'
        viewBox='0 0 33 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <mask
          id='path-1-outside-1_92_5290'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='33'
          height='26'
          fill='black'>
          <rect fill='white' width='33' height='26' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6 12L16.5 3L27 12H23.7692V23.5H20.1346V13.25H16.5H12.8654V23.5H9.23077V12H6Z'
          />
        </mask>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 12L16.5 3L27 12H23.7692V23.5H20.1346V13.25H16.5H12.8654V23.5H9.23077V12H6Z'
          fill='#D3D3D3'
        />
        <path
          d='M16.5 3L17.8016 1.48149L16.5 0.365844L15.1984 1.48149L16.5 3ZM6 12L4.69842 10.4815L0.593485 14H6V12ZM27 12V14H32.4065L28.3016 10.4815L27 12ZM23.7692 12V10H21.7692V12H23.7692ZM23.7692 23.5V25.5H25.7692V23.5H23.7692ZM20.1346 23.5H18.1346V25.5H20.1346V23.5ZM20.1346 13.25H22.1346V11.25H20.1346V13.25ZM12.8654 13.25V11.25H10.8654V13.25H12.8654ZM12.8654 23.5V25.5H14.8654V23.5H12.8654ZM9.23077 23.5H7.23077V25.5H9.23077V23.5ZM9.23077 12H11.2308V10H9.23077V12ZM15.1984 1.48149L4.69842 10.4815L7.30158 13.5185L17.8016 4.51851L15.1984 1.48149ZM15.1984 4.51851L25.6984 13.5185L28.3016 10.4815L17.8016 1.48149L15.1984 4.51851ZM27 10H23.7692V14H27V10ZM21.7692 12V23.5H25.7692V12H21.7692ZM23.7692 21.5H20.1346V25.5H23.7692V21.5ZM22.1346 23.5V13.25H18.1346V23.5H22.1346ZM20.1346 11.25H16.5V15.25H20.1346V11.25ZM12.8654 15.25H16.5V11.25H12.8654V15.25ZM14.8654 23.5V13.25H10.8654V23.5H14.8654ZM9.23077 25.5H12.8654V21.5H9.23077V25.5ZM7.23077 12V23.5H11.2308V12H7.23077ZM6 14H9.23077V10H6V14Z'
          fill='#6B6B6B'
          mask='url(#path-1-outside-1_92_5290)'
        />
      </svg>
      <h3 class='tracking-tighter text-gray-500'>{text || 'NavButton'}</h3>
    </div>
  )
}
