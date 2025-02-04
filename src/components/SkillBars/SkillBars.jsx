import React, { useState } from "react";
import "./SkillBars.css";

const ProgressBar = ({ skill }) => {
  const [progress, setProgress] = useState(skill.level);

  return (
    <div className="skill">
      <label htmlFor={skill.name} className="skillName">
        {skill.name}
      </label>
      <div className="sliderContainer">
        <input
          style={{
            background: `linear-gradient(to right, var(--active-) 0%, var(--active-) ${progress}%, #EDECEC ${progress}%)`,
          }}
          readOnly
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />
        <span style={{ left: `calc(${progress}% - 22px)` }} className="bubble">
          {progress}%
        </span>
      </div>
    </div>
  );
};

const SkillBars = () => {
  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "Javascript", level: 95 },
    { name: "React", level: 90 },
  ];

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <ProgressBar key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillBars;
