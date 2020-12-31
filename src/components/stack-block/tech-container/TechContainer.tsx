import React from "react";
import "./TechContainer.css";

const TechContainer = (props: { containerName: string }) => {
  return <div className="tech-block">{props.containerName}</div>;
};

export default TechContainer;
