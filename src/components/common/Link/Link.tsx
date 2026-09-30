import { useEffect, useState } from "react";
import "./Link.css";

type LinkProps = {
  href: string;
  title: string;
};

const Link = ({ href, title }: LinkProps) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <li>
      <a
        className={
          activeSection === title.toLowerCase() ? "link activeLink" : "link"
        }
        href={href}
      >
        {title}
      </a>
    </li>
  );
};

export default Link;
