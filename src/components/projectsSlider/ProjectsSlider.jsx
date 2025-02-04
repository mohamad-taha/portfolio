import React, { useState } from "react";
import Cards from "../Cards/Cards";
import { projects } from "../Cards/Cards";
import "./ProjectsSlider.css";

const slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="mt container">
      <div className="slider">
        <div className="sliderHeader">
          <span>Portfolio</span>
          <div>
            <p>
              The Best <span>Projects</span>
            </p>
            <div>
              <button aria-label="prev card" onClick={handlePrev}>
                <svg
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.94141 10.2114L0.656096 5.49989L4.94141 0.788349"
                    stroke="var(--text-)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button aria-label="next card" onClick={handleNext}>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.2876 10.2114L5.57291 5.49989L1.2876 0.788349"
                    stroke="var(--text-)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <Cards style={{ transform: `translateX(${activeIndex * -100}%)` }} />
        </div>
      </div>
    </div>
  );
};

export default slider;
