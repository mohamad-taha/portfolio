import Skills from "../../common/SkillItem/Skills";

import PersonalImg from "../../../assets/images/personalImg.png";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="sectionHeader">
          <h3>ABOUT ME</h3>

          <h1>
            My <span>Skills</span>
          </h1>

          <p>
            Technologies and tools I use to build modern and responsive web
            experiences.
          </p>
        </div>

        <Skills />

        <div className="sectionHeader">
          <h1>
            My <span>Journey</span>
          </h1>

          <p>A glimpse into my journey as a frontend developer.</p>
        </div>

        <div className="journeyContent">
          <img src={PersonalImg} alt="mohamad taha kasir" />

          <p>
            Hello! I'm <span>Mohamad Taha Kasir</span> , from Aleppo, Syria. My
            journey as a Frontend Developer began in 2023, when I had my first
            experience with programming at Projects SY Institute. Since then,
            I've been passionate about creating modern, responsive, and
            user-friendly web applications. I enjoy turning ideas into
            interactive interfaces while focusing on clean design, performance,
            and a smooth user experience. I'm continuously improving my skills
            and exploring new technologies to become a better developer and
            build meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
