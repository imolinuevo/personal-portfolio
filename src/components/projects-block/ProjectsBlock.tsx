import React, { useState } from "react";
import "./ProjectsBlock.css";
import { ReactComponent as LeftNavigationIcon } from "./navigation-icons/left-navigation-icon.svg";
import { ReactComponent as RightNavigationIcon } from "./navigation-icons/right-navigation-icon.svg";
import projectList from "./projectList";

const ProjectsBlock = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const shiftProjectRight = () => {
    setActiveProjectIndex(
      activeProjectIndex === projectList.length - 1 ? 0 : activeProjectIndex + 1
    );
  };

  const shiftProjectLeft = () => {
    setActiveProjectIndex(
      activeProjectIndex === 0 ? projectList.length - 1 : activeProjectIndex - 1
    );
  };

  return (
    <div className="main-block projects-block" id="projects">
      <div className="block-title">
        <h2>Personal Projects</h2>
      </div>
      <div className="carousel">
        <div className="project-container">
          <div className="image-container">
            <a
              href={`https://github.com/imolinuevo/${projectList[
                activeProjectIndex
              ].title
                .replace(/ /g, "-")
                .toLocaleLowerCase()}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={
                  require(`./snapshots/${projectList[activeProjectIndex].title
                    .replace(/ /g, "-")
                    .toLocaleLowerCase()}.png`).default
                }
                alt={projectList[activeProjectIndex].title}
              />
            </a>
          </div>
          <div className="project-description-container">
            <div className="left-nav">
              <LeftNavigationIcon onClick={shiftProjectLeft} />
            </div>
            <div className="text-container">
              <h4 className="project-description-title">
                {projectList[activeProjectIndex].title}
              </h4>
              <p className="project-description-text">
                {projectList[activeProjectIndex].description}
              </p>
              <p className="project-description-tags">
                {projectList[activeProjectIndex].tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </p>
            </div>
            <div className="right-nav">
              <RightNavigationIcon onClick={shiftProjectRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
