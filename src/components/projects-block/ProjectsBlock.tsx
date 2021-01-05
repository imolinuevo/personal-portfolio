import React, { useState } from "react";
import "./ProjectsBlock.css";
import { ReactComponent as LeftNavigationIcon } from "./navigation-icons/left-navigation-icon.svg";
import { ReactComponent as RightNavigationIcon } from "./navigation-icons/right-navigation-icon.svg";
import projectList from "./projectList";

const ProjectsBlock = () => {
  const [projects, setProjects] = useState(projectList);
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="main-block projects-block" id="projects">
      <div className="block-title">
        <h2>Personal Projects</h2>
      </div>
      <div className="carousel">
        <div className="project-container">
          <div className="image-container">
            <img
              src={
                require(`./snapshots/${activeProject.title.toLocaleLowerCase()}.png`)
                  .default
              }
              alt={activeProject.title}
            />
          </div>
          <div className="project-description-container">
            <div className="left-nav">
              <LeftNavigationIcon />
            </div>
            <div className="text-container">
              <h4 className="project-description-title">
                {activeProject.title}
              </h4>
              <p className="project-description-text">
                {activeProject.description}
              </p>
              <p className="project-description-tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </p>
            </div>
            <div className="right-nav">
              <RightNavigationIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
