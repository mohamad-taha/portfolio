import React, { useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Slider from "../components/projectsSlider/ProjectsSlider";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectCard />
      <Slider />
    </>
  );
};

export default ProjectDetails;
