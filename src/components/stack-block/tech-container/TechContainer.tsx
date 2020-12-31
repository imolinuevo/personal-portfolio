import React from "react";
import "./TechContainer.css";

const TechContainer = (props: { containerName: string }) => {
  return (
    <div className="tech-block">
      <h4>{props.containerName}</h4>
      <div className="tech-icons-container"></div>
    </div>
  );
};

export default TechContainer;
