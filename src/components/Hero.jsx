/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const particlesContainer = particlesRef.current;
    const particles = Array.from(particlesContainer.children);

    // Set initial random positions for particles
    particles.forEach((particle) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.2,
      });
    });

    // Animate particles
    particles.forEach((particle) => {
      animateParticle(particle);
    });

    function animateParticle(particle) {
      gsap.to(particle, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 4 + 3,
        ease: "sine.inOut",
        onComplete: () => animateParticle(particle),
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="h-[90vh] md:h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {/* Generate 30 particles with different sizes */}
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-sky-400 ${
              index % 3 === 0
                ? "w-1 h-1"
                : index % 3 === 1
                ? "w-2 h-2"
                : "w-3 h-3"
            }`}
          ></div>
        ))}
      </div>

      <div className="container flex flex-col items-center text-center z-10">
        <div className="max-w-3xl">
          <h2 className="headline-1 text-5xl md:text-6xl lg:text-7xl font-bold max-w-[24ch] mx-auto mt-5 mb-8 lg:mb-10 leading-tight lg:leading-tight tracking-wide">
            Crafting Digital Experiences That Inspire & Transform
          </h2>

          <div className="flex items-center justify-center gap-3 mt-8">
            <ButtonPrimary
              href="https://vt5eyv1e1r.ufs.sh/f/Ozz7E6ivPF5CM5gDdPij189Sb6lNsuDW7FR5Lzkwhx0vemYU"
              label="Download CV"
              icon="download"
              target="_blank"
            />

            <ButtonOutline
              href="#about"
              label="Explore More"
              icon="arrow_downward"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
