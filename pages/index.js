import About from '@/Components/About'
import AllinOne from '@/Components/AllinOne'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Support from '@/Components/Support'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <AllinOne/>
    </div>
  )
}

export default index