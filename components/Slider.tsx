'use client'
import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from 'gsap'



function Slider() {
    useGSAP(() => {
        gsap.to('#page1 h1', {
            transform: 'translateX(-80%)',
            scrollTrigger: {
                trigger: '#page1',
                scroller: 'body',
                start: 'top 10%',
                end: 'top -120%',
                scrub: 1.5,
                pin: true,                
            }
        });
    });
  return (
    <div id='page1' className='w-full h-[90%] flex bg-gradient-to-r from-[#e9e8ee] via-[#cf9ee6] to-[#68cfb0] overflow-x-hidden'>
        <h1 className='text-[28vw] font-semibold bg-gradient-to-r from-[#2906db] via-[#b94141] to-[#799613] bg-clip-text text-transparent pl-40 uppercase'>Power_Rangers_Always_Wins</h1>
        {/* <img src="/Red.jpeg" alt="" />
        <img src="/Blue.jpeg" alt="" />
        <img src="/Green.jpeg" alt="" />
        <img src="/Yellow.jpeg" alt="" />
        <img src="/Pink.jpeg" alt="" /> */}
      
    </div>
  )
}

export default Slider
