import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { FaGoogleDrive } from "react-icons/fa";

import PersonalImg from "../../../assets/images/myImg.webp";

import "./Hero.css";

const Hero = () => {
  const handleOpenResume = () => {
    window.open(
      "https://drive.google.com/file/d/13h7uD5Mg4woeJv0cct-mKZebjEStrhm6/view?usp=drive_link",
    );
  };

  const handleOpenGithub = () => {
    window.open("https://github.com/mohamad-taha");
  };

  return (
    <section id="home">
      <div className="hero container">
        <div className="content">
          <h1>
            This is your Frontend Developer <span>Mohamad Taha Kasir</span>
          </h1>

          <p>
            I build modern, responsive, and user-friendly web experiences with
            React and TypeScript.
          </p>

          <div className="actions">
            <button onClick={handleOpenResume} className="primaryBtn">
              My Resume <FaGoogleDrive />
            </button>

            <button onClick={handleOpenGithub} className="outlineBtn">
              View Github <LuCircleArrowOutUpRight />
            </button>
          </div>
        </div>

        <img src={PersonalImg} alt="taha kasir image" />
      </div>
    </section>
  );
};

export default Hero;
