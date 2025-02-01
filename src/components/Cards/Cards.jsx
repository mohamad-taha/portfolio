import React from "react";
import { Link } from "react-router-dom";
import Projects from "../../projects.json";
import "./Cards.css";

const Cards = ({ style }) => {
  return (
    <div className="cardsContainer">
      {Projects.map((project) => (
        <div style={style} className="card" key={project.id}>
          <a target="_blank" href={project.link}>
            <img src={project.img} alt="project img" />
          </a>
          <p>{project.title}</p>
          <div>
            <span>{project.libraries.join("-")}</span>
            <Link to={`/project/${project.id}/${project.title}`}>
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
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
