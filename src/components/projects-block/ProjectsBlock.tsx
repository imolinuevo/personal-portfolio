import React from "react";
import "./ProjectsBlock.css";

const ProjectsBlock = () => {
  return (
    <div className="main-block projects-block" id="projects">
      <div className="block-title">
        <h2>Personal Projects</h2>
      </div>
      <div className="carousel">
        <div className="project-container">
          <div className="image-container">
            <div className="left-nav"></div>
            <img src="" alt="" />
            <div className="right-nav"></div>
          </div>
          <div className="project-description-container">
            <h4 className="project-description-title">Title</h4>
            <p className="project-description-text">Project description.</p>
            <p className="project-description-tags">
              <span>tag</span>
              <span>tag</span>
              <span>tag</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
