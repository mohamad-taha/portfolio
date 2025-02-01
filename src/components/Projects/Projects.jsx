import React from "react";
import Cards from "../Cards/Cards";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="mt">
      <div className="container">
        <div className="projects">
          <div className="header">
            <span>Portfolio</span>
            <div>
              <h2>
                My Creative Works Latest <span>Projects</span>
              </h2>
              <a
                target="_blank"
                className="primaryBtn"
                href="https://github.com/mohamad-taha"
              >
                View Github
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2357 14.6583L17.2357 8.22008L10.7975 8.22008"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.22005 17.2355L17.1455 8.31006"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Projects;
