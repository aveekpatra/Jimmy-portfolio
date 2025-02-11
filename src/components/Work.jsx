

/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
    projectDescription:
      "Ipsum ullamcorper justo consectetuer nulla no duo facer tempor feugait ut aliquyam et eu dolor.",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
    projectDescription:
      "Ipsum ullamcorper justo consectetuer nulla no duo facer tempor feugait ut aliquyam et eu dolor.",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
    projectDescription:
      "Ipsum ullamcorper justo consectetuer nulla no duo facer tempor feugait ut aliquyam et eu dolor.",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
    projectDescription:
      "Ipsum ullamcorper justo consectetuer nulla no duo facer tempor feugait ut aliquyam et eu dolor.",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    projectDescription:
      "Ipsum ullamcorper justo consectetuer nulla no duo facer tempor feugait ut aliquyam et eu dolor.",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    projectDescription:
      "Ipsum ullamcorper justo consectetuer nulla no duo facer tempor feugait ut aliquyam et eu dolor.",
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
}

export default Work