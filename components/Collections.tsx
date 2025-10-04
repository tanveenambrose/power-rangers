"use client";

import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { allRengers } from "../constants";

function Collections() {
  const [currentId, setCurrentId] = useState(1);
  const [currentRenger, setCurrentRenger] = useState(allRengers[0]);

  useEffect(() => {
    const selectedRenger = allRengers.find((rengers) => rengers.id === currentId);
    setCurrentRenger(selectedRenger || allRengers[0]);
  }, [currentId]);

  useGSAP(() => {
    gsap.fromTo(
      "#currentRengerImage",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(".name", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".title",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: "power1.inOut", delay: 0.5 }
    );
    gsap.fromTo(
      ".description",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: "power1.inOut", delay: 0.8 }
    );
    gsap.to("#icon3", {y: 400, x: -400, rotation: 180, scale:2,duration:2, delay:2, scrollTrigger: { trigger: "#collections", start: "30% bottom", end: "90% bottom ", scrub: 2, markers: true }});
  }, [currentId]);

  return (
    <section id="collections" className="relative py-16 md:py-32 bg-gradient-to-b from-slate-950 via-slate-700 to-gray-800 ">
      {/* 背景装饰 */}
      <img
        src="/icon3.png"
        alt="icon3"
        id="icon3"
        className="absolute top-0 right-6 w-12 md:w-48 "
      />

      {/* 标签导航 */}
      <nav className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12 md:mb-16">
        {allRengers.map((rengers, _) => {
          const isActive = rengers.id === currentId;
          console.log("rengers.id, currentId", rengers.id, currentId);
          return (
            <button
              key={rengers.id}
              onClick={() => setCurrentId(rengers.id)}
              className={`px-3 py-1 md:px-5 md:py-2 rounded-full text-xs md:text-base font-medium transition-all duration-300 
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
            >
              {rengers.name}
            </button>
          );
        })}
      </nav>

      {/* 主体内容 */}
      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 md:px-0">
        <div className=" flex justify-center">
          <div className="w-[220px] h-[220px] md:w-[450px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl bg-transparent">
            <img
              id="currentRengerImage"
              src={currentRenger.image}
              alt={currentRenger.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 文字内容 */}
        <div className="space-y-6 text-center md:text-left  px-4 py-2 backdrop-blur-xs bg-white/20 rounded-2xl">
          {/* Mapping color suffixes to full Tailwind text color classes */}
          {(() => {
            const colorClassMap: Record<string, string> = {
              red: "text-red-500",
              "blue-600": "text-blue-600",
              "pink-600": "text-pink-600",
              "yellow-600": "text-yellow-600",
              "green-600": "text-green-600",
            };
            const textColorClass = colorClassMap[currentRenger.color] || "text-white";
            return (
              <p className={`name text-2xl md:text-4xl font-extrabold mt-2 ${textColorClass}`}>
                {currentRenger.name}
              </p>
            );
          })()}

          <div className="space-y-4 hidden md:block">
            <h2 className="title text-lg md:text-2xl font-semibold text-orange-300">
              {currentRenger.title}
            </h2>
            <p className="description text-sm font-semibold md:text-base text-gray-800 leading-relaxed">
              {currentRenger.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collections;