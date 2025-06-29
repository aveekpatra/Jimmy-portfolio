import { Github, Linkedin } from "lucide-react";

const aboutItems = [
  {
    label: "Projects completed",
    number: 20,
  },
  {
    label: "Years of experience",
    number: 3,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up ring-1 ring-inset ring-zinc-50/10">
          <h2 className="headline-2 text-center mb-12 md:mb-16 reveal-up">
            About Me
          </h2>
          <p className="text-zinc-200 mb-4 md:mb-8 md:text-xl md:max-w-full font-light">
            Hello, I&apos;m Aveek, a passionate full-stack developer who
            transforms ideas into exceptional digital experiences. With a keen
            eye for design and a deep understanding of modern web technologies,
            I create solutions that are not only visually stunning but also
            highly functional and user-friendly.
            <br />
            <br />
            My journey in web development has been driven by curiosity and a
            commitment to excellence. I specialize in building scalable
            applications using cutting-edge technologies like React, Next.js,
            and TypeScript. Whether it&apos;s crafting pixel-perfect interfaces
            or architecting robust backend systems, I approach every project
            with meticulous attention to detail and a focus on delivering
            results that exceed expectations.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 md:gap-7">
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl ml-2">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300">{label}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aveekpatra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-700/50 hover:bg-zinc-600 transition-all duration-300 hover:scale-110 group ring-1 ring-inset ring-zinc-50/10"
                aria-label="GitHub Profile"
              >
                <Github
                  size={20}
                  className="text-zinc-300 group-hover:text-white"
                />
              </a>
              <a
                href="https://linkedin.com/in/aveekpatra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-700/50 hover:bg-blue-600 transition-all duration-300 hover:scale-110 group ring-1 ring-inset ring-zinc-50/10"
                aria-label="LinkedIn Profile"
              >
                <Linkedin
                  size={20}
                  className="text-zinc-300 group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
