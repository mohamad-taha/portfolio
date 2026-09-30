import { FiExternalLink, FiGithub } from "react-icons/fi";

import "./ProjectCard.css";

type ProjectCardProps = {
  image: string;
  title: string;
  desc: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

const ProjectCard = ({
  image,
  title,
  desc,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <article className="projectCard">
      <div className="projectImage">
        <img src={image} alt={title} />
      </div>

      <div className="projectContent">
        <h3>{title}</h3>

        <p className="projectDesc">{desc}</p>

        <div className="projectTechnologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="projectLinks">
          <a href={githubUrl} target="_blank">
            <FiGithub />
            GitHub
          </a>

          <a href={liveUrl} target="_blank">
            <FiExternalLink />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;