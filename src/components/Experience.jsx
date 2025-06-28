import { Briefcase, Calendar, MapPin } from "lucide-react";

const experienceData = [
  {
    position: "Web Developer",
    company: "Traffic Balance sro.",
    location: "Prague, Czech Republic",
    period: "2025 - Present",
    type: "Full-time",
    description:
      "Developed and maintained client websites using JavaScript and modern frameworks. Collaborated with designers to implement pixel-perfect UI. Optimized site performance and improved SEO rankings for various clients.",
    skills: ["JavaScript", "CSS", "React.js", "Figma", "SEO", "Python"],
  },
  {
    position: "Web Developer",
    company: "CzechEase",
    location: "Prague, Czech Republic",
    period: "2022 - 2023",
    type: "Part-time",
    description:
      "Assisted in the development of web applications and learned industry best practices. Contributed to UI component libraries and participated in code reviews. Gained hands-on experience with modern web technologies.",
    skills: ["HTML", "CSS", "JavaScript", "Git", "Figma", "React.js"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Work Experience</h2>

        <div className="space-y-8 md:space-y-12">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 p-7 rounded-2xl md:p-10 relative overflow-hidden reveal-up ring-1 ring-inset ring-zinc-50/10"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {exp.position}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium bg-sky-400/20 text-sky-400 rounded-full">
                    {exp.type}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-medium">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Skills */}
              <div>
                <h4 className="text-white font-medium mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-zinc-700/50 rounded-full text-zinc-300 ring-1 ring-inset ring-zinc-50/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
