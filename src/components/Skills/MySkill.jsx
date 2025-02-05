import React from "react";

const mySkill = ({ src, alt }) => {
  return (
    <div
      className="skill"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "max-content",
        gap: "10px",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          objectFit: "contain",
          width: "70px",
          height: "70px",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
};

export default mySkill;
