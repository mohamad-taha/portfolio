import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "../../projects.json";
import { Context } from "../../context/Context";
import "./ProjectCard.css";

const ProjectCard = () => {
  const { theme } = useContext(Context);
  const [fullScreen, setFullScreen] = useState(false);
  const [myProject, setMyProject] = useState({});
  const params = useParams();
  const currentProject = Projects.find((project) => project.id == params.id);

  useEffect(() => {
    setMyProject(currentProject);
  }, [currentProject]);

  return (
    <div className="container">
      <div className="projectCard">
        <img
          src={
            theme === "light"
              ? "/assets/imgs/dot.svg"
              : "/assets/imgs/Ellipse.svg"
          }
          alt="ellipse"
        />
        <div className="projectImg">
          <div>
            <button onClick={() => setFullScreen(true)}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.6667 66.6666V68.6666H68.6667V66.6666H66.6667ZM51.4143 48.5857C50.6332 47.8047 49.3669 47.8047 48.5859 48.5857C47.8048 49.3668 47.8048 50.6331 48.5859 51.4142L51.4143 48.5857ZM64.6667 46.6666V66.6666H68.6667V46.6666H64.6667ZM66.6667 64.6666H46.6667V68.6666H66.6667V64.6666ZM68.081 65.2524L51.4143 48.5857L48.5859 51.4142L65.2525 68.0808L68.081 65.2524Z"
                  fill="white"
                />
                <path
                  d="M13.3333 66.6666H11.3333V68.6666H13.3333V66.6666ZM31.4141 51.4142C32.1952 50.6331 32.1952 49.3668 31.4141 48.5857C30.6331 47.8047 29.3668 47.8047 28.5857 48.5857L31.4141 51.4142ZM11.3333 46.6666V66.6666H15.3333V46.6666H11.3333ZM13.3333 68.6666H33.3333V64.6666H13.3333V68.6666ZM14.7475 68.0808L31.4141 51.4142L28.5857 48.5857L11.919 65.2524L14.7475 68.0808Z"
                  fill="white"
                />
                <path
                  d="M66.6667 13.3334H68.6667V11.3334H66.6667V13.3334ZM48.5859 28.5858C47.8048 29.3669 47.8048 30.6332 48.5859 31.4143C49.3669 32.1953 50.6332 32.1953 51.4143 31.4143L48.5859 28.5858ZM68.6667 33.3334V13.3334H64.6667V33.3334H68.6667ZM66.6667 11.3334H46.6667V15.3334H66.6667V11.3334ZM65.2525 11.9192L48.5859 28.5858L51.4143 31.4143L68.081 14.7476L65.2525 11.9192Z"
                  fill="white"
                />
                <path
                  d="M13.3333 13.3334V11.3334H11.3333V13.3334H13.3333ZM28.5857 31.4143C29.3668 32.1953 30.6331 32.1953 31.4141 31.4143C32.1952 30.6332 32.1952 29.3669 31.4141 28.5858L28.5857 31.4143ZM15.3333 33.3334V13.3334H11.3333V33.3334H15.3333ZM13.3333 15.3334H33.3333V11.3334H13.3333V15.3334ZM11.919 14.7476L28.5857 31.4143L31.4141 28.5858L14.7475 11.9192L11.919 14.7476Z"
                  fill="white"
                />
              </svg>
            </button>
            <a target="_blank" href={myProject.link}>
              <svg
                width="60"
                height="60"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.59392 24.0317C1.0348 18.1934 2.54537 11.7059 7.12563 7.12563C13.9598 0.291456 25.0402 0.291456 31.8744 7.12563C38.7085 13.9598 38.7085 25.0402 31.8744 31.8744C27.2941 36.4546 20.8066 37.9652 14.9683 36.4061M24.7502 24.7502V14.2502M24.7502 14.2502H14.2502M24.7502 14.2502L7.24991 31.7501"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <img
            onClick={() => setFullScreen(false)}
            className={fullScreen ? "fullScreenImg" : ""}
            src={myProject.img}
            alt="project image"
          />
        </div>
        <div className="projectContent">
          <div>
            <h3>{myProject.title}</h3>
            <a target="_blank" href={myProject.link}>
              <svg
                width="35"
                height="35"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.59392 24.0317C1.0348 18.1934 2.54537 11.7059 7.12563 7.12563C13.9598 0.291456 25.0402 0.291456 31.8744 7.12563C38.7085 13.9598 38.7085 25.0402 31.8744 31.8744C27.2941 36.4546 20.8066 37.9652 14.9683 36.4061M24.7502 24.7502V14.2502M24.7502 14.2502H14.2502M24.7502 14.2502L7.24991 31.7501"
                  stroke="var(--active-)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <p>{myProject.description}</p>
          <div>
            <p>
              <span>Basic Languages: </span>
              {myProject.languages && myProject.languages.length > 0
                ? myProject.languages.join(", ")
                : "No libraries used"}
            </p>
            <p>
              <span>Libraries: </span>
              {myProject.libraries && myProject.libraries.length > 0
                ? myProject.libraries.join(", ")
                : "No libraries used"}
            </p>
          </div>
          <a target="_blank" href={myProject.repo} className="primaryBtn">
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
