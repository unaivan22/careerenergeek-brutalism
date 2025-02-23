import React from 'react'

export default function NavbarPublic() {
  return (
    <div className='fixed top-4 left-0 w-full p-3 z-[999] bg-white dark:bg-black w-[80%] rounded-full border-2 border-black left-1/2 transform -translate-x-1/2'>
      <div className='flex items-center justify-center'>
        <a href='/'><img className='h-[32px]' src='/energeek-full.svg' /></a>
      </div>
    </div>
  )
}