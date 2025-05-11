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
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-full font-light">
            Hello, I&apos;m Aveek, a full-stack developer dedicated to crafting
            high-quality, user-centric digital experiences. My approach to
            development is rooted in a genuine passion for building solutions
            that are not only technically sound but also intuitive and engaging
            for the end-user.
            <br />
            <br />I believe in the power of clean, well-structured code and
            thoughtful design to create seamless interactions and robust
            applications. Whether I&apos;m working on the front-end to bring a
            design to life or architecting the back-end logic, my focus is
            always on delivering performance, scalability, and a positive user
            journey. I enjoy the challenge of transforming complex problems into
            elegant, effective solutions and continuously seek to refine my
            skills to stay at the forefront of modern web development
          </p>

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

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            {/* <img
              src="/images/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="ml-auto md:w-[50px] md:h-[50px]"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
