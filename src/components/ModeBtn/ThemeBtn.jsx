import React, { useContext, useState } from "react";
import sun from "../../assets/imgs/Sun.svg";
import moon from "../../assets/imgs/moon.svg";
import { Context } from "../../context/Context";

const modeBtn = () => {
  const { theme, setTheme } = useContext(Context);
  const [icn, setIcn] = useState(false);

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIcn(true);
    setTimeout(() => {
      setIcn(false);
    }, 200);
  };

  return (
    <button
      aria-label="change theme"
      className="modeBtn"
      onClick={handleChangeTheme}
    >
      <img
        style={icn ? { transform: "scale(0)" } : { transform: "scale(1)" }}
        width={30}
        src={theme === "dark" ? sun : moon}
        alt="theme icon"
      />
    </button>
  );
};

export default modeBtn;
