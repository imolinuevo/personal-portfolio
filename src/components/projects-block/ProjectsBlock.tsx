import React, { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import "./ProjectsBlock.css";
import { ReactComponent as LeftNavigationIcon } from "./navigation-icons/left-navigation-icon.svg";
import { ReactComponent as RightNavigationIcon } from "./navigation-icons/right-navigation-icon.svg";
import projectList from "./projectList";

const ProjectsBlock = () => {
  const isDesktopSize: boolean = useMediaPredicate("(min-width: 600px)");

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [fadingStatus, setFadingStatus] = useState("fade-in");

  const shiftProject = (direction: string) => {
    setFadingStatus("fade-out");
    setTimeout(() => {
      setFadingStatus("fade-in");
      setActiveProjectIndex(
        direction === "right"
          ? activeProjectIndex === projectList.length - 1
            ? 0
            : activeProjectIndex + 1
          : activeProjectIndex === 0
          ? projectList.length - 1
          : activeProjectIndex - 1
      );
    }, 500);
  };

  return (
    <div className="main-block projects-block" id="projects">
      <div className="block-title">
        <h2>Personal Projects</h2>
      </div>
      <div className="carousel">
        <div className="project-container">
          <div className={`image-container ${fadingStatus}`}>
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
                    .toLocaleLowerCase()}${isDesktopSize ? "" : "-mini"}.png`)
                    .default
                }
                alt={projectList[activeProjectIndex].title}
              />
            </a>
          </div>
          <div className="project-description-container">
            <div className="left-nav" onClick={() => shiftProject("left")}>
              <LeftNavigationIcon />
            </div>
            <div className={`text-container ${fadingStatus}`}>
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
            <div className="right-nav" onClick={() => shiftProject("right")}>
              <RightNavigationIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
