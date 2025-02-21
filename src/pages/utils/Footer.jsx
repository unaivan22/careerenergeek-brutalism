import React from 'react'

export default function Footer() {
  return (
    <div className='container hidden md:flex items-center h-[150px] mt-24'>
      <div className='flex flex-wrap gap-12 items-center p-6'>
        <div className='flex items-center bg-stone-100 dark:bg-black p-6 rounded-3xl'>
          <img className='h-12' src='/e.svg' />
        </div>
        <div className='flex gap-6'>
          <a href='https://energeek.co.id/' target='_blank' className='text-sm font-semibold hover:underline'>Home</a>
          <a href='https://energeek.co.id/#bt_about' target='_blank' className='text-sm font-semibold hover:underline'>About</a>
          <a href='https://energeek.co.id/#bt_client' target='_blank' className='text-sm font-semibold hover:underline'>Clients</a>
          <a href='https://energeek.co.id/#bt_works' target='_blank' className='text-sm font-semibold hover:underline'>Portfolios</a>
          <a href='https://energeek.co.id/#bt_service' target='_blank' className='text-sm font-semibold hover:underline'>Services</a>
          <a href='https://energeek.co.id/#bt_team' target='_blank' className='text-sm font-semibold hover:underline'>Teams</a>
          <a href='https://energeek.co.id/#bt_contact' target='_blank' className='text-sm font-semibold hover:underline'>Contact</a>
          <a href='https://energeek.co.id/#bt_blog' target='_blank' className='text-sm font-semibold hover:underline'>Blog</a>
        </div>
      </div>
    </div>
  )
}
