import React from "react";
import { ReactComponent as MiniBrowser } from "./mini-browser.svg";
import "./LandingBlock.css";
import githubLogo from "./github-logo.png";
import linkedinLogo from "./linkedin-logo.png";

const LandingBlock = () => {
  return (
    <div className="main-block landing-block">
      <div className="social-nav-bar">
        <a
          href="https://github.com/imolinuevo"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="github logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/i%C3%B1igo-molinuevo-37473885/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} alt="linkein logo" />
        </a>
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
            <button>Browse stack</button>
            <button>Browse projects</button>
          </div>
        </div>
        <MiniBrowser className="mini-browser" />
      </div>
    </div>
  );
};

export default LandingBlock;
