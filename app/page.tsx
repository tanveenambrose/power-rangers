'use client'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText) //register global plugins

function App() {
  return (
    <main className='bg-gradient-to-br  from-blue-50 via-purple-50 to-pink-50'>
      <Navbar />
      <Hero/>
    </main>
  )
}

export default App
