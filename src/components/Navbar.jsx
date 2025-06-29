import { useRef, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  // When true, real‑time scroll updates are skipped (because a nav link was clicked)
  const skipScrollUpdateRef = useRef(false);
  // Store the target index when a nav link is clicked.
  const navTargetIndexRef = useRef(null);
  // Cache DOM elements for each section.
  const sectionsRef = useRef([]);

  const navItems = useMemo(
    () => [
      { label: "Home", link: "#home" },
      { label: "About", link: "#about" },
      { label: "Work", link: "#experience" },
      { label: "Skills", link: "#skill" },
      { label: "Projects", link: "#work" },
      { label: "Contact", link: "#contact" },
    ],
    []
  );

  // Update the "active-box" position to match the active link.
  const initActiveBox = () => {
    const activeLink = lastActiveLink.current;
    if (activeLink && activeBox.current) {
      activeBox.current.style.top = activeLink.offsetTop + "px";
      activeBox.current.style.left = activeLink.offsetLeft + "px";
      activeBox.current.style.width = activeLink.offsetWidth + "px";
      activeBox.current.style.height = activeLink.offsetHeight + "px";
    }
  };

  // On mount, cache the section DOM elements.
  useEffect(() => {
    sectionsRef.current = navItems.map((item) =>
      document.querySelector(item.link)
    );
  }, [navItems]);

  // Recalculate the active box on window resize.
  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  // When a nav link is clicked, record the target index and "lock" scroll updates.
  const activeCurrentLink = (index) => {
    skipScrollUpdateRef.current = true;
    navTargetIndexRef.current = index;
    setActiveLinkIndex(index);
  };

  // Scroll event: update active link in real time (if not skipping)
  useEffect(() => {
    const handleScroll = () => {
      if (skipScrollUpdateRef.current) {
        // If we're in nav-click mode, check if the target section is nearly in view.
        const targetIndex = navTargetIndexRef.current;
        const targetSection = sectionsRef.current[targetIndex];
        if (targetSection) {
          const rect = targetSection.getBoundingClientRect();
          // If the top of the target section is between 0 and 30% of the viewport height,
          // assume the target is reached and re-enable real-time updates.
          if (rect.top >= 0 && rect.top < window.innerHeight * 0.3) {
            skipScrollUpdateRef.current = false;
          } else {
            // Otherwise, ignore scroll updates (so intermediate sections don't override the nav click)
            return;
          }
        }
      }

      // Real-time update when manually scrolling:
      let closestIndex = 0;
      let closestDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Calculate the section's center relative to the viewport.
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });
      setActiveLinkIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Whenever the active link changes, update the highlight box.
  useEffect(() => {
    initActiveBox();
  }, [activeLinkIndex]);

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link }, index) => (
        <a
          href={link}
          key={label}
          ref={index === activeLinkIndex ? lastActiveLink : null}
          className={`nav-link ${index === activeLinkIndex ? "active" : ""}`}
          onClick={() => activeCurrentLink(index)}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
