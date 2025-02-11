import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0); // State to track the current section in view
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    const activeLink = lastActiveLink.current;
    if (activeLink) {
      activeBox.current.style.top = activeLink.offsetTop + "px";
      activeBox.current.style.left = activeLink.offsetLeft + "px";
      activeBox.current.style.width = activeLink.offsetWidth + "px";
      activeBox.current.style.height = activeLink.offsetHeight + "px";
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  // Update the active link on click
  const activeCurrentLink = (index) => {
    setActiveLinkIndex(index);
  };

  // Define nav items and their corresponding sections
  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skill" },
    { label: "Work", link: "#work" },
    // { label: "Reviews", link: "#reviews" },
    { label: "Contact", link: "#contact" },
  ];

  // Scroll observer to detect the active section in view
  useEffect(() => {
    const sections = navItems.map((_, i) =>
      document.querySelector(navItems[i].link)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target);
            setActiveLinkIndex(index); // Update active section
          }
        });
      },
      {
        threshold: [0.5], // Multiple thresholds to cover various section sizes
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Update `active-box` position based on the active link
  useEffect(() => {
    if (lastActiveLink.current) {
      initActiveBox();
    }
  }, [activeLinkIndex]);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link }, index) => (
        <a
          href={link}
          key={index}
          ref={index === activeLinkIndex ? lastActiveLink : null} // Assign ref to the active link
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
