import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Links from "../NavLinks/Links";
import ModeBtn from "../ModeBtn/ThemeBtn";
import "./Sidebar.css";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(Context);

  window.onresize = () => {
    if (window.innerWidth > 1023) {
      setShowSidebar(false);
    }
  };
  return (
    <>
      <div
        style={{
          transform: showSidebar ? "translateX(0)" : "translateX(-100%)",
        }}
        className="overlay"
        onClick={() => setShowSidebar(false)}
      ></div>
      <div
        style={{
          transform: showSidebar ? "translateX(0)" : "translateX(-100%)",
        }}
        className="sidebar"
      >
        <Links />
        <ModeBtn />
      </div>
    </>
  );
};

export default Sidebar;
