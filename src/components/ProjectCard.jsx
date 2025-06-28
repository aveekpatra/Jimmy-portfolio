/**
 * Node modules
 */
import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({
  imgSrc,
  title,
  projectDescription,
  tags,
  projectLink,
  classes,
}) => {
  return (
    <div
      className={
        "group relative p-4 rounded-2xl bg-zinc-800/50 backdrop-blur-sm hover:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 hover:ring-zinc-50/10 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-xl mb-4 border border-zinc-50/10 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Simplified image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </figure>

      <div className="space-y-3">
        <div>
          <h3 className="title-1 mb-2 text-white group-hover:text-blue-100 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-zinc-400 mb-4 leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors duration-300">
            {projectDescription}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {tags.map((label, key) => (
            <span
              key={key}
              className="inline-flex items-center h-6 px-2.5 text-xs font-medium text-zinc-300 bg-zinc-50/5 rounded-full ring-1 ring-inset ring-zinc-50/10 hover:bg-zinc-50/10 hover:text-white transition-all duration-300"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Simplified action button */}
      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-50/10 grid place-items-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 ease-out">
        <ArrowUpRight size={14} />
      </div>

      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      ></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  projectDescription: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
