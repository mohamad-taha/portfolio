import React from "react";
import { Link } from "react-router-dom";
import projectpng1 from "../../assets/imgs/project1.webp";
import projectpng2 from "../../assets/imgs/project2.png";
import projectpng3 from "../../assets/imgs/project3.png";
import projectpng4 from "../../assets/imgs/project4.webp";
import projectpng5 from "../../assets/imgs/project5.png";
import projectpng6 from "../../assets/imgs/project6.png";
import "./Cards.css";

export const projects = [
  {
    id: 1,
    link: "https://mohamad-taha.github.io/Blogs/",
    repo: "https://github.com/mohamad-taha/Blogs",
    img: projectpng1,
    title: "Blogs",
    libraries: ["React", "React Router"],
    languages: ["HTML", "CSS", "Javascript"],
    description:
      "A thoughtfully curated online publication featuring in-depth articles on a wide range of topics, presented in a clean, modern design that adapts seamlessly to various devices and screen sizes, ensuring an optimal reading experience for our audience.",
  },
  {
    id: 2,
    link: "https://mohamad-taha.github.io/dashboard/",
    repo: "https://github.com/mohamad-taha/dashboard",
    img: projectpng2,
    title: "Dashboard",
    libraries: [
      "React",
      "React Router",
      "MUI",
      "Formik",
      "Yup",
      "React Helmet",
    ],
    languages: ["HTML", "CSS", "Javascript"],
    description:
      "DashStack is a dynamic and interactive web application designed for efficient product management. It features an intuitive dashboard interface that allows administrators to view, add, edit, and delete products seamlessly.",
  },
  {
    id: 3,
    link: "https://mohamad-taha.github.io/devtaha/",
    repo: "https://github.com/mohamad-taha/devtaha",
    img: projectpng3,
    title: "DevTaha",
    libraries: ["React", "React Swipeable"],
    languages: ["HTML", "CSS", "Javascript"],
    description:
      "A professional online portfolio showcasing my expertise and experience in frontend development, featuring a curated selection of projects, skills, and achievements that demonstrate my capabilities as a frontend developer.",
  },
  {
    id: 4,
    link: "https://mohamad-taha.github.io/sneakers/",
    repo: "https://github.com/mohamad-taha/sneakers",
    img: projectpng4,
    title: "Sneakers",
    libraries: ["React"],
    languages: ["HTML", "CSS", "Javascript"],
    description:
      "A comprehensive online shopping platform designed to showcase and sell a wide range of products, providing a seamless and engaging user experience for customers to browse, purchase, and manage their orders.",
  },
  {
    id: 5,
    link: "https://mohamad-taha.github.io/calculator/",
    repo: "https://github.com/mohamad-taha/calculator",
    img: projectpng5,
    title: "Calculator",
    libraries: ["React", "MUI"],
    languages: ["HTML", "CSS", "Javascript"],
    description:
      "A basic arithmetic calculator application designed to perform simple calculations, including basic arithmetic operations such as addition, subtraction, multiplication, and division. This application allows you to perform calculations with ease and efficiency, and provides a simple and user-friendly interface. It is ideal for everyday use, and is suitable for students, professionals, and anyone who needs to perform quick calculations.",
  },
  {
    id: 6,
    link: "https://mohamad-taha.github.io/todo-list/",
    repo: "https://github.com/mohamad-taha/todo-list",
    img: projectpng6,
    title: "To-Do-App",
    libraries: ["React", "React Router", "MUI"],
    languages: ["HTML", "CSS", "Javascript"],
    description:
      "A web-based task management application that enables users to create, read, update, and delete (CRUD) todo lists, allowing for efficient organization and prioritization of tasks.",
  },
];

const Cards = ({ style }) => {
  return (
    <div className="cardsContainer">
      {projects.map((project) => (
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
