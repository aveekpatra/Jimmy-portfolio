/**
 * Components
 */

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Download, ArrowUpRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const cloudRef = useRef(null);
  const profileRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const cloud = cloudRef.current;
    const profile = profileRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const description = descriptionRef.current;
    const buttons = buttonsRef.current;

    // Wait for layout to be established, especially important on mobile
    const initAnimation = () => {
      // Hero content animation timeline
      const heroTL = gsap.timeline({ delay: 0.3 });

      // Set initial states with proper mobile handling
      gsap.set([profile, title, subtitle, description, buttons], {
        opacity: 0,
        y: 20, // Reduced from 30 for better mobile experience
        scale: 0.98, // Less dramatic scale for mobile
        clearProps: "transform", // Clear any existing transforms
      });

      // Animate elements in sequence
      heroTL
        .to(profile, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          subtitle,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          buttons,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.3"
        );

      return heroTL;
    };

    // Use requestAnimationFrame to ensure DOM is ready
    let heroTL;
    const animationFrame = requestAnimationFrame(() => {
      heroTL = initAnimation();
    });

    // Create a master timeline for coordinated animations
    const masterTL = gsap.timeline({ repeat: -1 });

    // Smooth morphing animation with organic movement
    masterTL
      .to(cloud, {
        backgroundPosition: "35% 45%, 70% 60%, 50% 70%, 60% 40%",
        duration: 15,
        ease: "power1.inOut",
      })
      .to(cloud, {
        backgroundPosition: "55% 35%, 30% 65%, 75% 50%, 40% 55%",
        duration: 15,
        ease: "power1.inOut",
      })
      .to(cloud, {
        backgroundPosition: "45% 50%, 65% 30%, 30% 45%, 70% 70%",
        duration: 15,
        ease: "power1.inOut",
      })
      .to(cloud, {
        backgroundPosition: "30% 40%, 70% 60%, 50% 30%, 20% 70%",
        duration: 15,
        ease: "power1.inOut",
      });

    // Subtle breathing animation
    gsap.to(cloud, {
      scale: 1.05,
      duration: 28,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Gentle floating movement
    gsap.to(cloud, {
      x: 8,
      y: 4,
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Subtle rotation for organic feel
    gsap.to(cloud, {
      rotation: 1.5,
      duration: 35,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      masterTL.kill();
      if (heroTL) heroTL.kill();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24"
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
          top: "15%",
          left: "15%",
          right: "15%",
          bottom: "35%",
          background: `
            radial-gradient(ellipse 400px 280px at 30% 40%, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.15) 40%, transparent 70%),
            radial-gradient(ellipse 350px 250px at 70% 60%, rgba(147, 51, 234, 0.35) 0%, rgba(147, 51, 234, 0.12) 40%, transparent 70%),
            radial-gradient(ellipse 320px 220px at 50% 30%, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.08) 40%, transparent 70%),
            radial-gradient(ellipse 280px 200px at 20% 70%, rgba(245, 101, 101, 0.25) 0%, rgba(245, 101, 101, 0.06) 40%, transparent 70%)
          `,
          backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%",
          backgroundPosition: "30% 40%, 70% 60%, 50% 30%, 20% 70%",
          filter: "blur(20px) contrast(1.02) brightness(1.01)",
          opacity: 0.85,
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
          top: "20%",
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

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Profile Image */}
        <div ref={profileRef} className="relative inline-block mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-2 border-zinc-50/10 shadow-2xl bg-zinc-800">
            <img
              src="/images/logo-sm.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Full Stack Developer
            <br />
            <span
              ref={subtitleRef}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              & Creative Designer
            </span>
          </h1>

          <p
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl text-zinc-200 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Transforming ideas into powerful digital experiences through
            <br className="hidden sm:block" />
            innovative full-stack development and thoughtful design.
          </p>

          {/* Action Buttons with Animated Borders */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-xl mx-auto px-4 sm:px-0"
          >
            {/* Secondary Button */}
            <div className="relative w-full sm:w-fit">
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
              <a
                href="#work"
                className="relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base bg-zinc-800/50 text-zinc-200 hover:text-white transition-all duration-300 flex items-center justify-center w-full sm:min-w-[180px]"
              >
                <span className="inline-flex items-center uppercase">
                  See my work
                  <ArrowUpRight size={18} className="sm:w-5 sm:h-5 ml-2" />
                </span>
              </a>
            </div>

            {/* Primary Button */}
            <div className="relative w-full sm:w-fit">
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
              <a
                href="https://vt5eyv1e1r.ufs.sh/f/Ozz7E6ivPF5CM5gDdPij189Sb6lNsuDW7FR5Lzkwhx0vemYU"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base bg-white text-zinc-900 hover:bg-zinc-100 transition-all duration-300 flex items-center justify-center w-full sm:min-w-[180px]"
              >
                <span className="inline-flex items-center uppercase">
                  Download CV
                  <Download size={18} className="sm:w-5 sm:h-5 ml-2" />
                </span>
              </a>
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
