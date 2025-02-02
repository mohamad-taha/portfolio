import React from "react";
import Hero from "./../components/Hero/Hero";
import About from "./../components/About/About";
import Education from "./../components/Education/Education";
import Projects from "./../components/Projects/Projects";
import Contact from "./../components/Contact/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Home</title>
      </Helmet>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
