'use client'
import { navLinks } from "../constants";
import React, { useEffect, useRef, useState } from 'react'


function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isAudioPlaying, setIsAudioPlaying]= useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const audioElementRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

     const toggleAudioIndicator = ()=>{
        setIsAudioPlaying((prev)=> !prev);
        setIsIndicatorActive((prev)=> !prev);
    }

    useEffect(()=>{
        if(audioElementRef.current){
            if(isAudioPlaying){
                audioElementRef.current.currentTime = 0;
                audioElementRef.current.play();
            }else{
                audioElementRef.current.pause();
            }
        }
    },[isAudioPlaying])
  return (
    <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>


        <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src="/logo.png" alt="logo" className="w-24 h-10" />
        </a>

        {/* Nav Links - hidden on small screens */}
        <ul className="hidden lg:inline-flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                // pseudo-element after for underline effect
                // relative <a> + after:absolute
                className="text-gray-600 hover:text-black transition duration-300 text-sm font-medium uppercase tracking-wide relative ms-10 font-general after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100  cursor-pointer"
              >
                {link.title}
              </a>
            </li>
          ))}
          
          <button type="button" className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator}>
                        {[1,2,3,4].map((bar)=>(
                            <div key={bar}
                            className={`indicator-line ${isIndicatorActive ? 'active': '' }`}
                            style={{ animationDelay: `${bar * 0.1}`}}/>
                        ))}
                        <audio
                    ref={audioElementRef}
                    className='hidden'
                    src="/audio/PowerRangersSPD.mp3"
                    loop
                    preload="auto"
                />
          </button>
          
        </ul>
      </div>


    </nav>
  )
}

export default Navbar
