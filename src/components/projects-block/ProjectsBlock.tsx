import React from "react";
import "./ProjectsBlock.css";
import { ReactComponent as LeftNavigationIcon } from "./navigation-icons/left-navigation-icon.svg";
import { ReactComponent as RightNavigationIcon } from "./navigation-icons/right-navigation-icon.svg";

const ProjectsBlock = () => {
  return (
    <div className="main-block projects-block" id="projects">
      <div className="block-title">
        <h2>Personal Projects</h2>
      </div>
      <div className="carousel">
        <div className="project-container">
          <div className="image-container">
            <img src="" alt="" />
          </div>
          <div className="project-description-container">
            <div className="left-nav">
              <LeftNavigationIcon />
            </div>
            <div className="text-container">
              <h4 className="project-description-title">Title</h4>
              <p className="project-description-text">Project description.</p>
              <p className="project-description-tags">
                <span>tag</span>
                <span>tag</span>
                <span>tag</span>
                <span>tag</span>
                <span>tag</span>
                <span>tag</span>
                <span>tag</span>
                <span>tag</span>
                <span>tag</span>
                <span>tag</span>
                <span>tag</span>
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
