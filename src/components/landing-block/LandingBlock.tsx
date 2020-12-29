import React from "react";
import { ReactComponent as MiniBrowser } from "./mini-browser.svg";
import "./LandingBlock.css";
import GithubIcon from "../social-icons/GithubIcon";
import LinkedinIcon from "../social-icons/LinkedinIcon";

const LandingBlock = () => {
  return (
    <div className="main-block landing-block" id="landing">
      <div className="social-nav-bar">
        <GithubIcon />
        <LinkedinIcon />
      </div>
      <div className="center-content">
        <div className="title-container">
          <h1>
            I'm <span>Iñigo</span> Molinuevo
          </h1>
          <p>
            In my portfolio you can find information about my software stack and
            personal projects.
          </p>
          <div className="button-container">
            <a href="#stack">
              <button>Browse stack</button>
            </a>
            <a href="#projects">
              <button>Browse projects</button>
            </a>
          </div>
        </div>
        <MiniBrowser className="mini-browser" />
      </div>
    </div>
  );
};

export default LandingBlock;
