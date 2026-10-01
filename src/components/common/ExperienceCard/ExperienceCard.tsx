import { FiExternalLink } from "react-icons/fi";

import type { IconType } from "react-icons";

import "./ExperienceCard.css";

type ExperienceCardProps = {
  icn: IconType;
  title: string;
  desc: string;
  date: string;
  name: string;
  svg: IconType;
  degree: string;
  profile?: string;
};

const ExperienceCard = ({
  icn: Icon,
  title,
  desc,
  date,
  name,
  svg: Svg,
  degree,
  profile,
}: ExperienceCardProps) => {
  return (
    <div className="experienceCard">
      <div className="experienceIcon">
        <Icon />
      </div>

      <div className="experienceContent">
        <div className="experienceHeader">
          <div>
            <h3>{title}</h3>
            <p>{name}</p>
          </div>

          <span className="experienceDate">
            <Svg />
            {date}
          </span>
        </div>

        <span className="experienceDegree">{degree}</span>

        <p className="experienceDescription">{desc}</p>

        {profile && (
          <a
            className="experienceProfile"
            href={profile}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
            <FiExternalLink />
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
