import React from "react";
import { ITechIcon } from "./ITechIcon";
import "./TechIcon.css";

const TechIcon = (props: { icon: ITechIcon }) => {
  return (
    <div className="tech-icon">
      <span>Icon</span>
    </div>
  );
};

export default TechIcon;
