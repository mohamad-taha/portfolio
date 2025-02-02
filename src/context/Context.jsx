import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const [activeSection, setActiveSection] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  localStorage.setItem("theme", theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", localStorage.getItem("theme"));
  }, [theme]);

  return (
    <Context.Provider
      value={{
        showSidebar,
        setShowSidebar,
        theme,
        setTheme,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </Context.Provider>
  );
};
