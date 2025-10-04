'use client'
import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from 'gsap'


function Slider() {
    useGSAP(() => {
        gsap.to('#page1 h1', {
            transform: 'translateX(-200%)',
            scrollTrigger: {
                trigger: '#page1',
                scroller: 'body',
                start: 'top 0%',
                end: 'top -100%',
                scrub: 1,
                pin: true,
                
            }
        });
    });
  return (
    <div id='page1' className='w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-x-hidden'>
      <h1 className='text-[35vw] px-20 font-semibold uppercase'>Experience</h1>
    </div>
  )
}

export default Slider
