'use client'
import React from 'react'
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

function AllRangers() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#best-seller", // id=best-seller 用#选择器
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTimeline
      .to(".will-fade", {
        // classname=will-fade 用.选择器
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.4,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(".masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
      maskTimeline.to(".ranger1", {x: 400, y:70, scale:2.5, duration:2,opacity:1, ease:"power1.inOut"});
      maskTimeline.to(".ranger3", {x: -400, y:70, scale:2.5, duration:2,opacity:1, ease:"power1.inOut"});
      maskTimeline.to(".ranger2", {x: 120, y:-310, scale:2.3, duration:2,opacity:1, ease:"power1.inOut"});
      maskTimeline.to(".ranger4", {x: -120, y:-310, scale:2.3, duration:2,opacity:1, ease:"power1.inOut"});
  });

  return (
    <section id="best-seller" className="relative py-12 sm:py-32  pt-20">
      <div className=" mx-auto px-4 sm:px-6">
        {/* 标题 */}
        <h2 className="will-fade text-center text-3xl sm:text-5xl font-bold mb-6 text-pink-500">
            Meet the Rangers
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* 中间 Masked 图片 */}
          <div className="relative flex justify-center items-center w-full">
            <div className='relative'>
                <img
              src="/SamuraiRed.jpeg"
              alt="SamuraiRed"
              className="masked-img object-contain w-50 h-50 max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"
            />
            </div>
            <div className='absolute ranger1 opacity-0 top-0 left-0 '>
                <img
              src="/SamuraiBlue.jpg"
              alt="SamuraiBlue"
              className="masked-img object-contain w-20 h-20 max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"/>
            </div>
            <div className='absolute ranger3 opacity-0 top-0 right-0 '>
                <img
              src="/SamuraiGreen.jpg"
              alt="SamuraiGreen"
              className="masked-img object-contain w-20 h-20 max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"/>
            </div>
            <div className='absolute ranger2 opacity-0 top-100 left-0 '>
                <img
              src="/SamuraiYellow.jpg"
              alt="SamuraiYellow"
              className="masked-img object-contain w-20 h-20 max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"/>
            </div>
            <div className='absolute ranger4 opacity-0 top-100 right-0 '>
                <img
              src="/SamuraiPink.jpg"
              alt="SamuraiPink"
              className="masked-img object-contain w-20 h-20 max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"/>
            </div>
          </div>
        </div>

        {/* 遮罩内容 */}
        <div className="mt-6 sm:mt-10 text-center px-4">
          <h2 className="will-fade text-xl sm:text-4xl font-bold mb-4 sm:mb-6 text-purple-500">
           Power Rangers Samurai
          </h2>
          <div className="masked-content opacity-0  max-w-xl mx-auto hidden md:block">
            <h3 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">
              Crafted for Style, Built for Life
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              More than a bag — it’s a statement piece that blends artistry,
              quality, and everyday functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default AllRangers
