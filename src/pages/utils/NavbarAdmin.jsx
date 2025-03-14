import { LucideArrowUpRight } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ClearCookies from '../ClearCookies'
import { ModeToggle } from '@/components/mode-toggle'

export default function NavbarAdmin() {
  return (
    <div className='fixed top-0 left-0 z-50 w-full'>
        <div className='flex border-b py-4 bg-stone-50 dark:bg-black'>
            <div className='container flex items-center justify-between gap-6'>
                <div className='flex gap-6'>
                    <a target='_blank' className="flex items-center gap-2 text-lg font-semibold" href="/" aria-label="Brand">
                        <img className='w-6' src='/e.svg' />
                        <h1 className='text-rose-500'>Careers</h1>
                    </a>
                    <div className='flex items-center gap-4'>
                        <NavLink
                            exact
                            className='font-semibold text-stone-500 text-sm'
                            to="/loker-rJWbRV"
                            activeClassName="active" 
                        >
                            Loker
                        </NavLink>
                        <NavLink
                            exact
                            className='font-semibold text-stone-500 text-sm'
                            to="/admin-rJWbRV"
                            activeClassName="active" 
                        >
                            User
                        </NavLink>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    {/* <ModeToggle /> */}
                    <ClearCookies />
                </div>
            </div>
        </div>
      {/* <header className="sm:px-6 relative flex flex-wrap sm:justify-start sm:flex-nowrap w-[100vw] bg-white border-b text-sm py-4">
            <nav className="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center justify-between">
                <a target='_blank' className="flex items-center gap-2 text-lg font-semibold" href="/" aria-label="Brand">
                    <img className='w-6' src='/e.svg' />
                    <h1 className='text-rose-500'>Careers</h1>
                </a>
                <div className="sm:hidden">
                    <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white dark:bg-black text-gray-800 shadow-xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                    <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                    <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>
                </div>
                <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 pt-1 ">
                        <NavLink
                            exact
                            className='font-semibold text-stone-500 text-sm'
                            to="/loker"
                            activeClassName="active" 
                        >
                            Loker
                        </NavLink>
                        <NavLink
                            exact
                            className='font-semibold text-stone-500 text-sm'
                            to="/admin"
                            activeClassName="active" 
                        >
                            User
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header> */}
    </div>
  )
}