import React, { useContext, useState } from "react";
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
    <button className="modeBtn" onClick={handleChangeTheme}>
      <img
        style={icn ? { transform: "scale(0)" } : { transform: "scale(1)" }}
        width={30}
        src={
          theme === "dark" ? "./assets/imgs/Sun.svg" : "./assets/imgs/moon.svg"
        }
        alt="theme icon"
      />
    </button>
  );
};

export default modeBtn;
