"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Utility type for managing individual flip state
interface FlipState {
    [key: string]: boolean;
}

function SamuraiRangers() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const containerRef = useRef<HTMLDivElement>(null); 
    const flipStateRef = useRef<FlipState>({}); 

    // 🔄 FLIP & BLUR EFFECT Logic for ALL images
    useEffect(() => {
        const flipperContainers = containerRef.current?.querySelectorAll(".flip-card-container");
        if (!flipperContainers) return;

        // Initialize flip state for all flippers
        flipperContainers.forEach((container) => {
            const flipper = container.querySelector(".flipper");
            if (flipper) {
                 flipStateRef.current[flipper.id] = false;
            }
        });

        // Function to handle the flip animation and blur/focus
        const handleHover = (e: Event) => {
            const targetContainer = e.currentTarget as HTMLDivElement;
            const flipper = targetContainer.querySelector(".flipper") as HTMLDivElement;
            if (!flipper) return;

            const id = flipper.id;
            const isFlipped = flipStateRef.current[id];

            // 1. BLUR/FOCUS LOGIC
            if (e.type === "mouseenter") {
                // Blur/Dim ALL
                gsap.to(flipperContainers, {
                    filter: "blur(5px) brightness(0.7)",
                    duration: 0.3,
                    ease: "power2.out",
                });
                // Focus Current
                gsap.to(targetContainer, {
                    filter: "blur(0px) brightness(1)",
                    duration: 0.3,
                    ease: "power2.out",
                });
            } else { // mouseleave
                // Remove Blur/Dim from ALL
                gsap.to(flipperContainers, {
                    filter: "blur(0px) brightness(1)",
                    duration: 0.3,
                    ease: "power2.out",
                });
            }


            // 2. FLIP LOGIC (Only runs if the event is mouseenter/mouseleave)
            let rotation: number | undefined = undefined;

            if (e.type === "mouseenter") {
                if (!isFlipped) {
                    rotation = 180; // Flip to the back face
                    flipStateRef.current[id] = true;
                }
            } else { // mouseleave
                if (isFlipped) {
                    rotation = 0; // Flip back to the front face
                    flipStateRef.current[id] = false;
                }
            }
            
            if (rotation !== undefined) {
                 gsap.to(flipper, {
                    duration: 0.2,
                    rotateY: rotation,
                    ease: "power2.inOut",
                });
            }
        };

        // Attach listeners to all flipper containers
        flipperContainers.forEach((container) => {
            container.addEventListener("mouseenter", handleHover);
            container.addEventListener("mouseleave", handleHover);
        });

        // Cleanup
        return () => {
            flipperContainers.forEach((container) => {
                container.removeEventListener("mouseenter", handleHover);
                container.removeEventListener("mouseleave", handleHover);
            });
        };
    }, []);

    // 🌀 Scroll animation section (remains the same)
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
            .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
            .to(".masked-img", { scale: 1.4, duration: 1, ease: "power1.inOut" })
            .to(".masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });

        // Ranger image animations
        maskTimeline.to(".ranger1", { x: 400, y: 70, scale: 3, duration: 2, opacity: 1, ease: "power1.inOut" });
        maskTimeline.to(".ranger3", { x: -400, y: 70, scale: 3, duration: 2, opacity: 1, ease: "power1.inOut" });
        maskTimeline.to(".ranger2", { x: 120, y: -310, scale: 2.7, duration: 2, opacity: 1, ease: "power1.inOut" });
        maskTimeline.to(".ranger4", { x: -120, y: -310, scale: 2.7, duration: 2, opacity: 1, ease: "power1.inOut" });
    }, [isMobile]);

    // --- RENDER FUNCTION UTILITY ---
    const backImages: { [key: string]: string } = {
        'red': '/SamuraiMegazord.webp',
        'blue': '/SamuraiZordBlue.webp', 
        'green': '/SamuraiZordGreen.webp', 
        'yellow': '/SamuraiZordYellow.webp', 
        'pink': '/SamuraiZordPink.webp', 
    };

    const renderRangerFlipCard = (id: string, src: string, alt: string, classes: string, frontClasses: string = 'w-64 h-64') => (
        <div 
            className={`flip-card-container relative ${frontClasses} [perspective:1000px] cursor-pointer`}
        >
            <div
                id={id}
                className="flipper relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
            >
                {/* FRONT FACE */}
                <div className="front-face absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(0deg)]">
                    <img
                        src={src}
                        alt={alt}
                        className={`object-contain w-full h-full rounded-xl shadow-xl ${classes}`}
                    />
                </div>

                {/* BACK FACE */}
                <div className="back-face absolute w-full h-full bg-indigo-600 flex items-center justify-center rounded-2xl shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] text-2xl font-bold text-white ">
                    <img
                        src={backImages[id.split('-')[0]] || '/SamuraiMegazord.jpg'}
                        alt={`${alt} Zord`}
                        className="object-cover w-full h-full rounded-xl"
                    />
                </div>
            </div>
        </div>
    );

    // --- MAIN RENDER ---
    return (
        <section id="best-seller" className="relative py-12 sm:py-32 pt-20 min-h-screen">
            <div className="mx-auto px-4 sm:px-6">
                {/* Title */}
                <h2 className="will-fade text-center text-3xl sm:text-5xl font-bold mb-6 text-pink-500">
                    Meet the Rangers
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center">
                    {/* 🔹 Container for ALL RANGERS */}
                    <div
                        ref={containerRef}
                        className="relative flex justify-center items-center w-full "
                    >
                        {/* 🔴 RED RANGER FLIPPER (Center Image) - SIZE FIXED HERE */}
                        {renderRangerFlipCard(
                            "red-ranger-flipper",
                            "/SamuraiRed.jpeg",
                            "SamuraiRed",
                            "masked-img",
                            // This class set restores the original dimensions
                            "w-50 h-50 max-w-[300px] sm:max-w-sm" 
                        )}

                        {/* 🟦 BLUE RANGER FLIPPER */}
                        <div className="absolute ranger1 opacity-0 top-0 left-0">
                            {renderRangerFlipCard(
                                "blue-ranger-flipper",
                                "/SamuraiBlue.jpg",
                                "SamuraiBlue",
                                "",
                                "w-20 h-20"
                            )}
                        </div>

                        {/* 🟩 GREEN RANGER FLIPPER */}
                        <div className="absolute ranger3 opacity-0 top-0 right-0">
                            {renderRangerFlipCard(
                                "green-ranger-flipper",
                                "/SamuraiGreen.jpg",
                                "SamuraiGreen",
                                "",
                                "w-20 h-20"
                            )}
                        </div>

                        {/* 🟨 YELLOW RANGER FLIPPER */}
                        <div className="absolute ranger2 opacity-0 top-100 left-0">
                            {renderRangerFlipCard(
                                "yellow-ranger-flipper",
                                "/SamuraiYellow.jpg",
                                "SamuraiYellow",
                                "",
                                "w-20 h-20"
                            )}
                        </div>

                        {/* 🌸 PINK RANGER FLIPPER */}
                        <div className="absolute ranger4 opacity-0 top-100 right-0">
                            {renderRangerFlipCard(
                                "pink-ranger-flipper",
                                "/SamuraiPink.jpg",
                                "SamuraiPink",
                                "",
                                "w-20 h-20"
                            )}
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
