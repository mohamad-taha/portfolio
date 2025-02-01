import React, { useContext } from "react";
import SkillBars from "../SkillBars/SkillBars";
import { Context } from "../../context/Context";
import dot from "../../assets/imgs/dot.svg";
import dot1 from "../../assets/imgs/Ellipse.svg";
import skills from "../../assets/imgs/skills.svg";
import "./About.css";

const About = () => {
  const { theme } = useContext(Context);
  return (
    <section id="aboutMe" className="mt">
      <img src={theme === "light" ? dot : dot1} alt="ellipse" />
      <div className="container">
        <div className="aboutMe mt">
          <img src={skills} alt="skills image" />
          <div className="content">
            <div>
              <h1>About Me</h1>
              <p>
                Hello! I'm Mohamad Taha Kasir, hailing from Aleppo city, Syria.
                My journey as a frontend developer began in 2023, with my first
                experience in programming at the "Projects SY" institute. Since
                then, I've been passionate about developing user interfaces and
                enhancing user experiences by designing and building interactive
                and attractive web applications.
              </p>
            </div>
            <SkillBars />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
