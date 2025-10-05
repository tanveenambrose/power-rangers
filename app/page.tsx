'use client'
import SamuraiRangers from '@/components/SamuraiRangers'
import Collections from '@/components/Collections'
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
      <Collections/>
      <SamuraiRangers/>
    </main>
  )
}

export default App
