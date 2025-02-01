import React, { useContext } from "react";
import { Context } from "./../../context/Context";
import squares from "../../assets/imgs/educationSquares.svg";
import border1 from "../../assets/imgs/borderImg1.png";
import border from "../../assets/imgs/borderImg.png";
import "./Education.css";

const Education = () => {
  const { theme, activeSection } = useContext(Context);

  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Vica Web Soluions: ",
      desc: `I built user interfaces using HTML, CSS, and JavaScript. I designed layouts based on Figma
            prototypes and integrated APIs into projects,
            utilizing React for development. I achieved an 95% performance rating.`,
    },
    {
      title: "Frontend Developer Trainee",
      company: "Projects SY: ",
      desc: `Throughout my training, I learned React, React Router, and Material-UI.
            I built interactive web applications by effectively
            integrating various libraries and APIs to create robust and dynamic projects.`,
    },
  ];

  return (
    <section id="education" className="mt">
      <img src={squares} alt="squares" />
      <img src={squares} alt="squares" />

      <div className="container">
        <div className="education">
          <p>Education and Experience</p>
          <h1>Education & Experience</h1>
          <div>
            {experience.map((work, idx) => (
              <div key={idx} className="experience">
                <img src={theme === "dark" ? border1 : border} alt="border" />
                <div>
                  <h3>{work.title}</h3>
                  <p>
                    <span>{work.company}</span>
                    {work.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div>
              <h3>Try me out, risk free!</h3>
              <p>
                If you’re not happy with the design after the first draft, I’ll
                refund your deposit,
                <span> no questions asked</span>
              </p>
            </div>
            <a color="white" className="primaryBtn" href="#contact">
              Contact
              <svg
                width="16"
                height="16"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9624 6.19869L8.10654 1.34278L9.23753 0.211792L16.0243 6.99854L15.4588 7.56403L9.23753 13.7853L8.10654 12.6543L12.9624 7.79839H0.0272331V6.19869H12.9624Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <button
        style={{
          transform:
            activeSection > "aboutMe" && activeSection !== "home"
              ? "scale(1)"
              : "scale(0)",
        }}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 19L9 1.5M9 1.5L1.5 9M9 1.5L16.5 9"
            stroke="var(--bg-color-)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
};

export default Education;
