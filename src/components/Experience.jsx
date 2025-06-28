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
        <h2 className="headline-2 mb-6 sm:mb-8 reveal-up text-center sm:text-left">
          Work Experience
        </h2>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl relative overflow-hidden reveal-up ring-1 ring-inset ring-zinc-50/10"
            >
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0 mb-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    {exp.position}
                  </h3>
                  <span className="px-2.5 py-1 text-xs font-medium bg-sky-400/20 text-sky-400 rounded-full self-start sm:self-auto">
                    {exp.type}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-medium text-sm sm:text-base">
                    <Briefcase size={14} className="sm:w-4 sm:h-4" />
                    {exp.company}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-400 text-xs sm:text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {exp.description}
              </p>

              {/* Skills */}
              <div>
                <h4 className="text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-700/50 rounded-full text-zinc-300 ring-1 ring-inset ring-zinc-50/10"
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
