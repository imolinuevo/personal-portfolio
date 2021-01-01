import React from "react";
import { ITechIcon } from "./ITechIcon";
import "./TechIcon.css";

const TechIcon = (props: { icon: ITechIcon }) => {
  return (
    <div className="tech-icon">
      <a href={props.icon.url} target="_blank" rel="noreferrer">
        <img
          src={
            require(`./icons/${props.icon.title.toLocaleLowerCase()}.png`)
              .default
          }
          alt={props.icon.title}
        />
      </a>
      <span>{props.icon.title}</span>
    </div>
  );
};

export default TechIcon;
