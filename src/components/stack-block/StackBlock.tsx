import React from "react";
import "./StackBlock.css";
import { ITechContainer } from "./tech-container/ITechContainer";
import TechContainer from "./tech-container/TechContainer";
import techTypes from "./techTypes";

const StackBlock = () => {
  return (
    <div className="main-block stack-block" id="stack">
      <div className="block-title">
        <h2>Software Stack</h2>
      </div>
      <div className="tech-block-container">
        {techTypes.map((techContainer: ITechContainer) => (
          <TechContainer
            key={techContainer.groupName}
            containerName={techContainer.groupName}
            containerIcons={techContainer.groupIcons}
          />
        ))}
      </div>
    </div>
  );
};

export default StackBlock;
