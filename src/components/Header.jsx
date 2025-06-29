/**
 * Node modules
 */
import { useState } from "react";
import { Menu, X, Github } from "lucide-react";

/**
 * Components
 */
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 sm:h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center sm:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.png"
              width={32}
              height={32}
              alt="Portfolio Logo"
              className="sm:w-10 sm:h-10"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden p-2 -m-2 text-white hover:text-zinc-300 transition-colors"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {navOpen ? (
              <X size={20} className="sm:w-6 sm:h-6" />
            ) : (
              <Menu size={20} className="sm:w-6 sm:h-6" />
            )}
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="https://github.com/aveekpatra"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary max-md:hidden md:justify-self-end flex items-center gap-3 px-3 py-6 sm:px-4 sm:py-5.25 text-sm sm:text-base rounded-lg hover:bg-zinc-700 transition-colors shadow-inner"
        >
          <Github size={16} className="sm:w-5 sm:h-5" />
          <span className="hidden lg:inline">GitHub</span>
          <span className="lg:hidden">Code</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
