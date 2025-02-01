import React from "react";
import Hero from "./../components/Hero/Hero";
import About from "./../components/About/About";
import Education from "./../components/Education/Education";
import Projects from "./../components/Projects/Projects";
import Contact from "./../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
