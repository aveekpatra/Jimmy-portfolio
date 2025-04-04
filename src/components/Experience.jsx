import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    position: "Senior Frontend Developer",
    company: "TechVision Inc.",
    period: "2021 - Present",
    description:
      "Led the development of responsive web applications using React and Next.js. Implemented modern UI/UX designs and optimized performance across various client projects. Mentored junior developers and established coding standards for the team.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    position: "Web Developer",
    company: "Digital Craft Studio",
    period: "2019 - 2021",
    description:
      "Developed and maintained client websites using JavaScript and modern frameworks. Collaborated with designers to implement pixel-perfect UI. Optimized site performance and improved SEO rankings for various clients.",
    skills: ["JavaScript", "Vue.js", "Node.js", "SCSS"],
  },
  {
    position: "Frontend Intern",
    company: "InnoWeb Solutions",
    period: "2018 - 2019",
    description:
      "Assisted in the development of web applications and learned industry best practices. Contributed to UI component libraries and participated in code reviews. Gained hands-on experience with modern web technologies.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const experienceRefs = useRef([]);
  const timelineDotsRefs = useRef([]);
  const timelineLinesRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Main section animation
      gsap.fromTo(
        sectionRef.current.querySelector("h2"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Timeline animation setup
      timelineDotsRefs.current.forEach((dot, index) => {
        // Initial state - scale dots down and make them transparent
        gsap.set(dot, {
          scale: 0.5,
          opacity: 0.3,
          boxShadow: "0 0 0 0 rgba(56, 189, 248, 0)",
        });

        // Create a timeline for each dot
        const dotTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: experienceRefs.current[index],
            start: "top 70%",
            end: "center 30%",
            toggleActions: "play none none reverse",
            scrub: 0.5,
          },
        });

        // Animate the dot
        dotTimeline
          .to(dot, {
            scale: 1.2,
            opacity: 1,
            duration: 0.4,
            backgroundColor: "#38bdf8",
            boxShadow: "0 0 12px 2px rgba(56, 189, 248, 0.6)",
            ease: "elastic.out(1, 0.5)",
          })
          .to(dot, {
            scale: 1,
            boxShadow: "0 0 8px 1px rgba(56, 189, 248, 0.4)",
            duration: 0.2,
            ease: "power2.out",
          });
      });

      // Timeline lines animation
      timelineLinesRefs.current.forEach((line, index) => {
        if (!line) return; // Skip if no line (last item)

        // Set initial state - no height
        gsap.set(line, {
          scaleY: 0,
          transformOrigin: "top center",
          opacity: 0.3,
        });

        // Animate line drawing as we scroll
        gsap.to(line, {
          scaleY: 1,
          opacity: 0.8,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: experienceRefs.current[index],
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
          },
        });
      });

      // Experience items animations
      experienceRefs.current.forEach((item, index) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        });

        timeline
          .fromTo(
            item,
            {
              opacity: 0,
              x: -50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: index * 0.15,
            }
          )
          .fromTo(
            item.querySelectorAll(".animate-item"),
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.1,
            },
            "-=0.3"
          );
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="headline-1 text-center mb-12 md:mb-16">
          Work Experience
        </h2>

        <div className="space-y-8 md:space-y-12">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 p-7 rounded-2xl md:p-10 relative overflow-hidden"
              ref={(el) => (experienceRefs.current[index] = el)}
            >
              {/* Timeline dot with enhanced styling */}
              <div
                ref={(el) => (timelineDotsRefs.current[index] = el)}
                className="absolute left-7 top-7 w-4 h-4 rounded-full bg-sky-400/80 z-10 md:left-10 md:top-10 transition-all"
              ></div>

              {/* Timeline line with enhanced styling - now for all cards */}
              <div
                ref={(el) => (timelineLinesRefs.current[index] = el)}
                className={`absolute left-9 top-11 w-0.5 bg-gradient-to-b from-sky-400/50 to-zinc-700/50 md:left-12 md:top-14 ${
                  index === experienceData.length - 1
                    ? "h-[calc(100%-1rem)]" // Shorter line for the last card
                    : "h-[calc(100%+2rem)]" // Original height for other cards
                }`}
              ></div>

              <div className="ml-8 md:ml-10">
                <div className="animate-item">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {exp.position}
                  </h3>
                  <p className="text-sky-400 mb-2">
                    {exp.company} | {exp.period}
                  </p>
                </div>

                <p className="text-zinc-300 mb-4 animate-item">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 animate-item">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-zinc-700/50 rounded-full text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
