/**
 * Components
 */
import { ButtonPrimary } from "./Button";
import {
  Home,
  User,
  Briefcase,
  MessageSquare,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const sitemap = [
  {
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    label: "About",
    href: "#about",
    icon: User,
  },
  {
    label: "Work",
    href: "#work",
    icon: Briefcase,
  },
  {
    label: "Reviews",
    href: "#reviews",
    icon: MessageSquare,
  },
  {
    label: "Contact me",
    href: "#contact",
    icon: Mail,
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/aveekpatra",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aveek-patra/",
    icon: Linkedin,
  },
  {
    label: "Twitter X",
    href: "https://x.com/aveek_patra",
    icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aveek.patra/",
    icon: Instagram,
  },
];

const Footer = () => {
  return (
    <footer
      className="relative bg-zinc-900/50 border-t border-zinc-800/50"
      id="footer"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none"></div>

      <div className="section relative">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-12 lg:mb-0">
              <h2 className="headline-1 mb-6 lg:max-w-[12ch] reveal-up bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Let&apos;s work together today!
              </h2>

              <p className="text-zinc-400 text-lg mb-8 max-w-[40ch] reveal-up">
                Ready to bring your ideas to life? Let&apos;s create something
                amazing together.
              </p>

              <ButtonPrimary
                href="mailto:aveekpatra2004@gmail.com"
                label="Start project"
                icon="chevron_right"
                classes="reveal-up"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-white font-semibold text-lg mb-6 reveal-up">
                  Navigation
                </h3>

                <ul className="space-y-3">
                  {sitemap.map(({ label, href, icon: IconComponent }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="group flex items-center gap-3 text-zinc-400 py-2 px-3 rounded-lg transition-all duration-500 ease-out hover:text-white hover:bg-zinc-800/30 hover:shadow-lg hover:shadow-zinc-900/20 hover:translate-x-1 reveal-up"
                      >
                        <IconComponent
                          size={18}
                          className="text-zinc-500 group-hover:text-blue-400 transition-all duration-500 ease-out group-hover:scale-110"
                        />
                        <span className="font-medium transition-all duration-500 ease-out">
                          {label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-6 reveal-up">
                  Connect
                </h3>

                <ul className="space-y-3">
                  {socials.map(({ label, href, icon: IconComponent }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-zinc-400 py-2 px-3 rounded-lg transition-all duration-500 ease-out hover:text-white hover:bg-zinc-800/30 hover:shadow-lg hover:shadow-zinc-900/20 hover:translate-x-1 reveal-up"
                      >
                        <IconComponent
                          size={18}
                          className="text-zinc-500 group-hover:text-blue-400 transition-all duration-500 ease-out group-hover:scale-110"
                        />
                        <span className="font-medium transition-all duration-500 ease-out">
                          {label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mt-10 reveal-up"></div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 my-10">
            <a href="/" className="logo reveal-up group">
              <img
                src="/images/logo.png"
                width={48}
                height={48}
                alt="Logo"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <p className="text-zinc-500 text-sm reveal-up text-center sm:text-left">
                &copy; 2025 All rights reserved
              </p>
              <a
                href="https://aveekpatra.info"
                className="text-zinc-300 hover:text-white transition-colors duration-300 text-sm font-medium reveal-up"
              >
                aveekpatra.info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
