import ExperienceCard from "../../common/ExperienceCard/ExperienceCard";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";

import CertificateCard from "../../common/CertificateCard/CertificateCard";

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
            profile="https://vica.website/trainees/749000"
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

        <div className="sectionHeader">
          <h3>Courses</h3>
          <h1>
            My <span>Certificates</span>
          </h1>
          <p>A collection of my completed courses and certifications in web</p>
        </div>

        <div className="ExperienceCardsbox">
          <CertificateCard
            title="Frontend Development with React"
            provider="IT Legend"
            certificateUrl="https://drive.google.com/file/d/10D52DOc2VHnprd9jk9S4eNiRDZjPXcrE/view?usp=drive_link"
          />

          <CertificateCard
            title="Introduction to Computer Science"
            provider="IT Legend"
            certificateUrl="https://drive.google.com/file/d/1hqG85A6VfxNA2jtInMTZ6NzMDTLGYCgn/view?usp=drive_link"
          />

          <CertificateCard
            title=" Algorithm and problem solving level 1"
            provider="IT Legend"
            certificateUrl="https://drive.google.com/file/d/1eqdRUG89Avbc-t_ZRXLeEhF5Uxz2O7LG/view?usp=drive_link"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
