import ExperienceCard from "../../common/ExperienceCard/ExperienceCard";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";

import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience container ">
        <div className="sectionHeader">
          <h3>EXPERIENCE</h3>

          <h1>
            My <span>Education</span>
          </h1>

          <p>
            My educational journey in the world of web development and computer
            science.
          </p>
        </div>

        <div className="ExperienceCardsbox">
          <ExperienceCard
            title="Informatics Engineering"
            name="Ittihad Private University"
            date="2021 - present"
            icn={IoSchoolOutline}
            svg={FiCalendar}
            degree="Bachelor's Degree"
            desc="  Currently studying Informatics Engineering and developing my technical
          skills in software development and modern technologies."
          />

          <ExperienceCard
            title="Frontend Developer Intern"
            name="Vica Web Solutions"
            date="9/2024 - 1/2025"
            icn={IoCodeSlashOutline}
            svg={FiCalendar}
            degree="Frontend Development Certificate — Vica Web Solutions"
            desc="  Developed responsive interfaces using HTML, CSS, JavaScript, and React. Worked with Figma designs, integrated APIs, and strengthened problem-solving skills, achieving a 95% performance rating."
          />

          <ExperienceCard
            title="Frontend Developer Trainee"
            name="Projects SY"
            date="9/2023 - 12/2023"
            icn={IoCodeSlashOutline}
            svg={FiCalendar}
            degree="Frontend Development Certificate — Projects SY"
            desc=" Learned and applied React, React Router, and Material UI through practical projects. Built interactive web applications by integrating APIs and various libraries to create dynamic and responsive user interfaces."
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
