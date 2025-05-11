/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/Project-portfolio.png",
    title: "Personal Portfolio",
    tags: ["GSAP", "Figma", "Frontend"],
    projectLink: "https://aveekpatra.info/",
    projectDescription:
      "This is my personal portfolio website. Created using React.js, Tailwind CSS. Also Used GSAP for animations and Lenis for smooth scrolling.",
  },
  {
    imgSrc: "/images/Project-zenify.png",
    title: "Zenify: productivity app",
    tags: ["Full Stack", "Convex"],
    projectLink: "https://github.com/aveekpatra/life_planner_app-2",
    projectDescription:
      "This is an all in one productivity app aimed to closely integrate tasks, calendar, notes and projects. Still in development.",
  },
  {
    imgSrc: "/images/Project-movies.png",
    title: "Movie App",
    tags: ["Full Stack", "API", "AppWrite"],
    projectLink: "https://movies.aveekpatra.info/",
    projectDescription:
      "This is a movie app created using React.js, Tailwind CSS, AppWrite and TMDB API to showcase my skills in full stack development.",
  },
  {
    imgSrc: "/images/Project-nike-landing.png",
    title: "Nike Landing Page Clone",
    tags: ["UI/UX", "Frontend"],
    projectLink: "https://nike-landing-page-clone-beta.vercel.app/",
    projectDescription:
      "A simple landing page for a Nike product. Created using React.js and Tailwind CSS to showcase my skills in frontend design.",
  },
  {
    imgSrc: "/images/Project-lumimail.png",
    title: "Lumi: Email Client",
    tags: ["UI/UX", "Frontend"],
    projectLink: "https://lumi-mail.vercel.app/",
    projectDescription:
      "This is a Keyboard centric UI for an email client. Created using Next.js, Typescript, and Tailwind CSS.",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "Musify: Spotify Client",
    tags: ["API", "MVC", "Full Stack"],
    projectLink: "https://musify-5al0.onrender.com/",
    projectDescription:
      "A Spotify client created using React.js, Tailwind CSS, and Spotify API to showcase my skills in API integration and frontend design.",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(
            ({ imgSrc, title, tags, projectLink, projectDescription }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                projectDescription={projectDescription}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
