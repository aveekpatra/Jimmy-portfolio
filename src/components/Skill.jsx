/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/next-js.svg",
    label: "NextJS",
    desc: "JS Framework",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "JS Library",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/trpc-placeholder.svg",
    label: "tRPC",
    desc: "Type-Safe API",
  },
  {
    imgSrc: "/images/vscode.svg",
    label: "VS Code",
    desc: "Code Editor",
  },
  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/nextauth-placeholder.svg",
    label: "NextAuth.js",
    desc: "Authentication",
  },
  {
    imgSrc: "/images/appwrite.svg",
    label: "Appwrite",
    desc: "Backend as a Service",
  },
  {
    imgSrc: "/images/cursor-placeholder.svg",
    label: "Cursor",
    desc: "AI-powered Editor",
  },
  {
    imgSrc: "/images/postgres-placeholder.svg",
    label: "PostgreSQL",
    desc: "SQL Database",
  },
  {
    imgSrc: "/images/prisma-placeholder.svg",
    label: "Prisma",
    desc: "ORM & Data Layer",
  },
  {
    imgSrc: "/images/react-native-placeholder.svg",
    label: "React Native",
    desc: "Mobile Development",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">My tech stack</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
