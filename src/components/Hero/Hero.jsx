import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home">
      <img src="/assets/imgs/BlurGradient.png" alt="gradient" />
      <div className="container">
        <div className="hero">
          <div className="content">
            <h1>
              <span>HEY!</span>
              I’m Mohamad, Frontend Developer
            </h1>
            <p>
              Hi there! I'm Frontend Developer specializing in crafting seamless
              user experiences and dynamic interfaces using modern web tools
            </p>
            <a href="/assets/pdfs/MohamadTahaKasirResume.pdf">Download Cv</a>
          </div>
          <div>
            <img src="/assets/imgs/myImg.png" alt="personal image" />
            <img src="/assets/imgs/squares.svg" alt="squares" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
