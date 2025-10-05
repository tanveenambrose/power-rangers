"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

function SamuraiRangers() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const containerRef = useRef<HTMLDivElement>(null);

  // 🌀 Hover blur effect
  useEffect(() => {
    const imgs = containerRef.current?.querySelectorAll("img");
    if (!imgs) return;

    imgs.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(imgs, {
          filter: "blur(5px) brightness(0.7)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(img, {
          filter: "blur(0px) brightness(1)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(imgs, {
          filter: "blur(0px) brightness(1)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  // 🌀 Scroll animation section
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#best-seller",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
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
      .to(".masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });

    // Ranger image animations
    maskTimeline.to(".ranger1", { x: 400, y: 70, scale: 3, duration: 2, opacity: 1, ease: "power1.inOut" });
    maskTimeline.to(".ranger3", { x: -400, y: 70, scale: 3, duration: 2, opacity: 1, ease: "power1.inOut" });
    maskTimeline.to(".ranger2", { x: 120, y: -310, scale: 2.7, duration: 2, opacity: 1, ease: "power1.inOut" });
    maskTimeline.to(".ranger4", { x: -120, y: -310, scale: 2.7, duration: 2, opacity: 1, ease: "power1.inOut" });
  });

  return (
    <section id="best-seller" className="relative py-12 sm:py-32 pt-20">
      <div className="mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="will-fade text-center text-3xl sm:text-5xl font-bold mb-6 text-pink-500">
          Meet the Rangers
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* 🔹 All images wrapped inside containerRef for GSAP hover */}
          <div
            ref={containerRef}
            className="relative flex justify-center items-center w-full"
          >
            {/* Center Red Ranger */}
            <div className="relative">
              <img
                src="/SamuraiRed.jpeg"
                alt="SamuraiRed"
                className="masked-img object-contain w-50 h-50 max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"
              />
            </div>

            {/* Blue Ranger */}
            <div className="absolute ranger1 opacity-0 top-0 left-0">
              <img
                src="/SamuraiBlue.jpg"
                alt="SamuraiBlue"
                className="object-contain w-20 h-20 max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"
              />
            </div>

            {/* Green Ranger */}
            <div className="absolute ranger3 opacity-0 top-0 right-0">
              <img
                src="/SamuraiGreen.jpg"
                alt="SamuraiGreen"
                className="object-contain w-20 h-20 max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"
              />
            </div>

            {/* Yellow Ranger */}
            <div className="absolute ranger2 opacity-0 top-100 left-0">
              <img
                src="/SamuraiYellow.jpg"
                alt="SamuraiYellow"
                className="object-contain w-20 h-20 max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"
              />
            </div>

            {/* Pink Ranger */}
            <div className="absolute ranger4 opacity-0 top-100 right-0">
              <img
                src="/SamuraiPink.jpg"
                alt="SamuraiPink"
                className="object-contain w-20 h-20 max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="mt-6 sm:mt-10 text-center px-4">
          <h2 className="will-fade text-xl sm:text-4xl font-bold mb-4 sm:mb-6 text-purple-500">
            Power Rangers Samurai
          </h2>
          <div className="masked-content opacity-0 max-w-xl mx-auto hidden md:block">
            <h3 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">
              Adapted From: Samurai Sentai Shinkenger
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              ⚔️ Power Rangers Samurai is one of the most iconic Power Rangers series,
              combining honor, teamwork, and powerful morphing energy to fight evil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SamuraiRangers;
