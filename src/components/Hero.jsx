/**
 * Components
 */

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const cloudRef = useRef(null);

  useEffect(() => {
    const cloud = cloudRef.current;

    // Create a master timeline for coordinated animations
    const masterTL = gsap.timeline({ repeat: -1 });

    // Smooth morphing animation with organic movement
    masterTL
      .to(cloud, {
        backgroundPosition: "20% 25%, 75% 65%, 45% 75%, 65% 35%",
        duration: 12,
        ease: "power1.inOut",
      })
      .to(cloud, {
        backgroundPosition: "60% 30%, 25% 70%, 80% 45%, 35% 60%",
        duration: 12,
        ease: "power1.inOut",
      })
      .to(cloud, {
        backgroundPosition: "40% 55%, 70% 25%, 25% 40%, 75% 75%",
        duration: 12,
        ease: "power1.inOut",
      })
      .to(cloud, {
        backgroundPosition: "30% 40%, 70% 60%, 50% 30%, 20% 70%",
        duration: 12,
        ease: "power1.inOut",
      });

    // Subtle breathing animation
    gsap.to(cloud, {
      scale: 1.08,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Gentle floating movement
    gsap.to(cloud, {
      x: 12,
      y: 6,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Subtle rotation for organic feel
    gsap.to(cloud, {
      rotation: 2,
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      masterTL.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          linear-gradient(to bottom, 
            #18181b 0%, 
            #18181b 60%, 
            #18181b 100%
          )
        `,
      }}
    >
      {/* Centered Cloud Background with Graceful Fading */}
      <div
        ref={cloudRef}
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "15%",
          right: "15%",
          bottom: "35%",
          background: `
            radial-gradient(ellipse 400px 280px at 30% 40%, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%),
            radial-gradient(ellipse 350px 250px at 70% 60%, rgba(147, 51, 234, 0.2) 0%, rgba(147, 51, 234, 0.06) 40%, transparent 70%),
            radial-gradient(ellipse 320px 220px at 50% 30%, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%),
            radial-gradient(ellipse 280px 200px at 20% 70%, rgba(245, 101, 101, 0.15) 0%, rgba(245, 101, 101, 0.03) 40%, transparent 70%)
          `,
          backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%",
          backgroundPosition: "30% 40%, 70% 60%, 50% 30%, 20% 70%",
          filter: "blur(20px) contrast(1.02) brightness(1.01)",
          opacity: 0.7,
          willChange: "transform, background-position",
          transform: "translateZ(0)",
          maskImage: `
            radial-gradient(ellipse 75% 65% at center 40%, 
              rgba(0,0,0,1) 0%, 
              rgba(0,0,0,0.8) 25%, 
              rgba(0,0,0,0.5) 45%, 
              rgba(0,0,0,0.2) 65%, 
              rgba(0,0,0,0.05) 80%, 
              transparent 100%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(ellipse 75% 65% at center 40%, 
              rgba(0,0,0,1) 0%, 
              rgba(0,0,0,0.8) 25%, 
              rgba(0,0,0,0.5) 45%, 
              rgba(0,0,0,0.2) 65%, 
              rgba(0,0,0,0.05) 80%, 
              transparent 100%
            )
          `,
        }}
      ></div>

      {/* Subtle Grain Texture - Only in Center Area */}
      <div
        className="absolute pointer-events-none opacity-15"
        style={{
          top: "15%",
          left: "20%",
          right: "20%",
          bottom: "40%",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
          mixBlendMode: "soft-light",
          maskImage: `
            radial-gradient(ellipse 80% 70% at center, 
              rgba(0,0,0,0.6) 0%, 
              rgba(0,0,0,0.3) 50%, 
              transparent 75%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(ellipse 80% 70% at center, 
              rgba(0,0,0,0.6) 0%, 
              rgba(0,0,0,0.3) 50%, 
              transparent 75%
            )
          `,
        }}
      ></div>

      {/* Seamless Bottom Fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: `
            linear-gradient(to bottom, 
              transparent 0%, 
              rgba(24, 24, 27, 0.3) 30%, 
              rgba(24, 24, 27, 0.7) 70%, 
              #18181b 100%
            )
          `,
        }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-zinc-50/10 shadow-2xl bg-zinc-800">
            <img
              src="/images/hero-banner-2.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Full Stack Developer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              & Creative Design
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital experiences through
            <br />
            innovative full-stack development and thoughtful design.
          </p>

          {/* Action Buttons with Animated Borders */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto">
            {/* Secondary Button */}
            <div className="relative w-fit">
              <div
                className="absolute inset-0 rounded-full p-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, #f97316, #3b82f6, #22c55e, #f97316)",
                  backgroundSize: "300% 100%",
                  animation: "moveGradient 8s linear infinite",
                }}
              >
                <div className="w-full h-full rounded-full bg-zinc-900"></div>
              </div>
              <button className="relative px-8 py-3.5 rounded-full font-semibold text-[16px] bg-zinc-800/50 text-zinc-300 hover:text-white transition-all duration-300 flex items-center justify-center min-w-[180px]">
                <span className="inline-flex items-center uppercase">
                  See my work
                  <span
                    className="material-symbols-rounded text-xl ml-2 relative -top-[0.5px]"
                    style={{ transform: "rotate(-45deg)" }}
                  >
                    arrow_forward
                  </span>
                </span>
              </button>
            </div>
            
            {/* Primary Button */}
            <div className="relative w-fit">
              <div
                className="absolute inset-0 rounded-full p-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, #ef4444, #3b82f6, #22c55e, #ef4444)",
                  backgroundSize: "300% 100%",
                  animation: "moveGradient 8s linear infinite",
                }}
              >
                <div className="w-full h-full rounded-full bg-zinc-900"></div>
              </div>
              <button className="relative px-8 py-3.5 rounded-full font-semibold text-[16px] bg-white text-zinc-900 hover:bg-zinc-100 transition-all duration-300 flex items-center justify-center min-w-[180px]">
                <span className="inline-flex items-center uppercase">
                  Download CV
                  <span className="material-symbols-rounded text-xl ml-2 relative -top-[0.5px]">
                    arrow_downward
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes moveGradient {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 300% 50%;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
