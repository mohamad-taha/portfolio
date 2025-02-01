import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";

const Links = () => {
  const { activeSection, setActiveSection } = useContext(Context);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [activeSection]);

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
            href={`#${link.id}`}
            className={activeSection === link.id ? "active" : ""}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
