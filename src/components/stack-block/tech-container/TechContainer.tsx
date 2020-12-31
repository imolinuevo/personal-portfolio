import React from "react";
import { ITechIcon } from "./tech-icon/ITechIcon";
import TechIcon from "./tech-icon/TechIcon";
import "./TechContainer.css";

const TechContainer = (props: {
  containerName: string;
  containerIcons: ITechIcon[];
}) => {
  return (
    <div className="tech-block">
      <h4>{props.containerName}</h4>
      <div className="tech-icons-container">
        {props.containerIcons.map((techIcon) => (
          <TechIcon icon={techIcon} key={techIcon.title} />
        ))}
      </div>
    </div>
  );
};

export default TechContainer;
