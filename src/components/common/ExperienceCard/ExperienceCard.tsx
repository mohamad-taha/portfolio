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
};

const ExperienceCard = ({
  icn: Icon,
  title,
  desc,
  date,
  name,
  svg: Svg,
  degree,
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
      </div>
    </div>
  );
};

export default ExperienceCard;
