import TypeScript from "../../../assets/images/skills/Typescript.png";
import css from "../../../assets/images/skills/css.png";
import daisyui from "../../../assets/images/skills/daisyui.png";
import figma from "../../../assets/images/skills/figma.svg";
import git from "../../../assets/images/skills/git.svg";
import html from "../../../assets/images/skills/html.webp";
import i18n from "../../../assets/images/skills/i18n.png";
import javaScript from "../../../assets/images/skills/javascript.svg";
import materialUi from "../../../assets/images/skills/materialUi.png";
import react from "../../../assets/images/skills/react.svg";
import reactRouter from "../../../assets/images/skills/reactRouter.png";
import tailwindcss from "../../../assets/images/skills/tailwindcss.svg";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <img src={html} alt="html" />

      <img src={css} alt="css" />

      <img src={javaScript} alt="javascript" />

      <img src={TypeScript} alt="typescript" />

      <img src={react} alt="react" />

      <img src={git} alt="git" />

      <img src={reactRouter} alt="reactRouter" />

      <img src={materialUi} alt="materialUi" />

      <img src={tailwindcss} alt="tailwindcss" />

      <img src={figma} alt="figma" />

      <img src={daisyui} alt="daisyui" />

      <img src={i18n} alt="i18n" />
    </div>
  );
};

export default Skills;
