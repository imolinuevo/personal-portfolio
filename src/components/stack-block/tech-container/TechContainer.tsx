import React, { useEffect } from "react";
import { ITechIcon } from "./tech-icon/ITechIcon";
import TechIcon from "./tech-icon/TechIcon";
import "./TechContainer.css";
import Aos from "aos";
import "aos/dist/aos.css";

const TechContainer = (props: {
  containerName: string;
  containerIcons: ITechIcon[];
}) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div data-aos="fade-up" className="tech-block">
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
