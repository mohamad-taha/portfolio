import MySkill from "./MySkill";
import htmlIcn from "../../assets/imgs/html.webp";
import cssIcn from "../../assets/imgs/css.png";
import jsIcn from "../../assets/imgs/javascript.svg";
import figmaIcn from "../../assets/imgs/figma.svg";
import gitIcn from "../../assets/imgs/git.svg";
import reactIcn from "../../assets/imgs/react.svg";
import muiIcn from "../../assets/imgs/materialUi.png";
import tailwindIcn from "../../assets/imgs/tailwindcss.svg";
import routerIcn from "../../assets/imgs/reactRouter.png";
import i18nIcn from "../../assets/imgs/i18n.png";
import tsIcn from "../../assets/imgs/typescript.png";
import daisyui from "../../assets/imgs/daisyui.png";
import "./skills.css";

const skills = () => {
  return (
    <div className="skills">
      <MySkill alt="html" src={htmlIcn} />
      <MySkill alt="css" src={cssIcn} />
      <MySkill alt="java script" src={jsIcn} />
      <MySkill alt="typescript" src={tsIcn} />
      <MySkill alt="figma" src={figmaIcn} />
      <MySkill alt="git" src={gitIcn} />
      <MySkill alt="react" src={reactIcn} />
      <MySkill alt="mui" src={muiIcn} />
      <MySkill alt="tailwind css" src={tailwindIcn} />
      <MySkill alt="daisyui" src={daisyui} />
      <MySkill alt="reactrouter" src={routerIcn} />
      <MySkill alt="i18n" src={i18nIcn} />
    </div>
  );
};

export default skills;
