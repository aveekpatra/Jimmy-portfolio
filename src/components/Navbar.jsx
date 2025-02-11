import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const sectionsRef = useRef([]);

  // Define nav items and their corresponding section anchors.
  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skill" },
    { label: "Work", link: "#work" },
    { label: "Contact", link: "#contact" },
  ];

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

  // On mount, cache the DOM elements for each section.
  useEffect(() => {
    sectionsRef.current = navItems.map((item) =>
      document.querySelector(item.link)
    );
  }, [navItems]);

  // Recalculate active-box position on window resize.
  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  // Update active link on click.
  const activeCurrentLink = (index) => {
    setActiveLinkIndex(index);
  };

  // Debounced scroll listener.
  useEffect(() => {
    const handleScroll = () => {
      // Clear any existing timer so we wait until scrolling stops.
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Set a new timer (150ms delay) after which we calculate the active section.
      scrollTimeoutRef.current = setTimeout(() => {
        const sections = sectionsRef.current;
        let closestIndex = 0;
        let closestDistance = Infinity;
        // Use the vertical center of the viewport as a reference.
        const viewportCenter = window.innerHeight / 2;

        sections.forEach((section, index) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            // Calculate the section’s center
            const sectionCenter = rect.top + rect.height / 2;
            const distance = Math.abs(sectionCenter - viewportCenter);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          }
        });
        setActiveLinkIndex(closestIndex);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Update the active-box position whenever the active link changes.
  useEffect(() => {
    initActiveBox();
  }, [activeLinkIndex]);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
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
