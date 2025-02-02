import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { useLocation } from "react-router-dom";

const Links = () => {
  const { activeSection, setActiveSection } = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [location.pathname]);

  const links = [
    { id: "home", text: "Home" },
    { id: "aboutMe", text: "About me" },
    { id: "education", text: "Education" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <a
            className={activeSection === link.id ? "active" : ""}
            href={`#${link.id}`}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
