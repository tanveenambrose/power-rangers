'use client'

import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText) //register global plugins

function App() {
  var main = document.getElementById("main");
  var cursor = document.getElementById("cursor");

  main?.addEventListener('mousemove', function(dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      ease: 'power3.out'
    })
  });

  

  return (
    <main id='main' className='bg-gradient-to-br relative  from-blue-50 via-purple-50 to-pink-50'>
      <Navbar />
        <div id='cursor' className='absolute w-[15px] h-[15px] rounded-full bg-black z-9'/>
        
          <Hero/>
      
    </main>
  )
}

export default App
