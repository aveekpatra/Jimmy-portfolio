/** * Node modules */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

/** * Register gsap plugins */
// gsap.registerPlugin(ScrollTrigger);

/** * Components */
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Ethan Caldwell",
    imgSrc: "/images/people-2.jpg",
    company: "NexaWave",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Liam Bennett",
    imgSrc: "/images/people-3.jpg",
    company: "CodeCraft",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Ava Thompson",
    imgSrc: "/images/people-5.jpg",
    company: "TechMosaic",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: "/images/people-6.jpg",
    company: "Skyline Digital",
  },
];

const Review = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const items = container.querySelector(".scrub-slide");

    // Duplicate items to make scrolling look infinite
    gsap.utils.toArray(items.children).forEach((child) => {
      items.appendChild(child.cloneNode(true));
    });

    const ctx = gsap.context(() => {
      const scrollElement = gsap.to(items, {
        xPercent: -100,
        ease: "none",
        repeat: -1,
        duration: 200,
        paused: true,
        modifiers: {
          xPercent: gsap.utils.unitize((value) => parseFloat(value) % 100),
        },
      });

      container.addEventListener("mouseenter", () => scrollElement.pause());
      container.addEventListener("mouseleave", () => scrollElement.play());

      scrollElement.play();
    }, containerRef);

    return () => ctx.revert();
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
      ref={containerRef}
    >
      <div className="my-5">
        <h2 className="container headline-2 mb-8 reveal-up">
          What the customers say
        </h2>
        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
