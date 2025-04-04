/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  // Frontend & UI
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "JS Library",
  },
  {
    imgSrc: "/images/next-js.svg",
    label: "NextJS",
    desc: "JS Framework",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
    desc: "Type Safety",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },

  // Backend & Database
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PostgreSQL",
    desc: "SQL Database",
  },
  {
    imgSrc: "/images/prisma.svg",
    label: "Prisma",
    desc: "ORM & Data Layer",
  },
  {
    imgSrc: "/images/trpc.svg",
    label: "tRPC",
    desc: "Type-Safe API",
  },

  // Authentication & Services
  {
    imgSrc: "/images/nextauth.svg",
    label: "NextAuth",
    desc: "Authentication",
  },
  {
    imgSrc: "/images/appwrite.svg",
    label: "Appwrite",
    desc: "Backend as a Service",
  },

  // Development Tools
  {
    imgSrc: "/images/vscode.svg",
    label: "VS Code",
    desc: "Code Editor",
  },
  {
    imgSrc: "/images/cursor.svg",
    label: "Cursor",
    desc: "AI-powered Editor",
  },
  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Version Control",
  },

  // Mobile Development
  {
    imgSrc: "/images/react.svg",
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
