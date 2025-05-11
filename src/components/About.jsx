const aboutItems = [
  {
    label: "Projects completed",
    number: 20,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-full">
            Hi there! I&apos;m Aveek Patra, a passionate full-stack developer
            specializing in building exceptional digital experiences. With a
            strong foundation in modern web technologies, I create scalable,
            high-performance websites and applications that deliver both
            aesthetic appeal and technical excellence.
            <br />
            <br />
            My expertise spans React, Next.js, Node.js, and modern CSS
            frameworks like Tailwind. I pride myself on writing clean,
            maintainable code and implementing responsive designs that work
            flawlessly across all devices. Whether you need a stunning
            portfolio, an e-commerce platform, or a complex web application, I
            deliver solutions that exceed expectations and help your business
            thrive in the digital landscape.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="ml-auto md:w-[50px] md:h-[50px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
