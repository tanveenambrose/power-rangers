'use client'

import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger, SplitText) //register global plugins

function App() {
  
  return (
    <main id='main' className='bg-gradient-to-br relative  from-blue-50 via-purple-50 to-pink-50'>
      <Navbar />
      <Hero/>
      <Slider/>
    </main>
  )
}

export default App
