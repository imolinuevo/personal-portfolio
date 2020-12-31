import React from "react";
import "./StackBlock.css";
import TechContainer from "./tech-container/TechContainer";

const techContainers = [
  "Front end",
  "Back end",
  "Databases",
  "Development tools",
];

const StackBlock = () => {
  return (
    <div className="main-block stack-block" id="stack">
      <div className="tech-block-container">
        {techContainers.map((techContainer) => (
          <TechContainer key={techContainer} containerName={techContainer} />
        ))}
      </div>
    </div>
  );
};

export default StackBlock;
