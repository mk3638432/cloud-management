import React, { useState } from 'react'
import {MenuIcon , XIcon}  from '@heroicons/react/outline'

const Navbar = () => {
const [nav ,setNav] = useState(false)
const handleMenu = () => {
    setNav(!nav)
}
console.log(nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg '>
        <div className='p-2 flex justify-between items-center w-full h-full'>
         <div className='flex items-center  w-full h-full'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl '>Brand.</h1>
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platform</li>
                <li>Pricing</li>
            </ul>
         </div>
         <div className='hidden md:flex pr-4'>
            <button className='py-3 px-8 bg-transparent text-black font-bold border-none'>Signin</button>
           <button className='py-3 px-8'>SignUp</button>
         </div>
         <div  className='md:hidden' onClick={handleMenu}>
            {nav ?<MenuIcon className='w-10'/> : <XIcon className='w-10'/> } 
         </div>
        </div>
       <div className={!nav ? 'bg-zinc-200 absolute w-full px-8' : 'hidden'}>
        <ul>
                <li className=' text-center border-b-2 border-zinc-300 '>Home</li>
                <li className=' text-center border-b-2 border-zinc-300 '>About</li>
                <li className=' text-center border-b-2 border-zinc-300 '>Support</li>
                <li className=' text-center border-b-2 border-zinc-300 '>Platform</li>
                <li className=' text-center border-b-2 border-zinc-300 '>Pricing</li>
        </ul>
        <div className='flex flex-col my-4'>
            <button className='bg-transparent px-4 mb-4 py-3 text-indigo-600 font-bold'>Sign in </button>
            <button className='px-8 py-3'>Sign Up </button>
        </div>
       </div>
    </div>
  )
}

export default Navbar