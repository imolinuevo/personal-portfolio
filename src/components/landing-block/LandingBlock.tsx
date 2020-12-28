import React from "react";
import { ReactComponent as MiniBrowser } from "./mini-browser.svg";
import "./LandingBlock.css";

const LandingBlock = () => {
  return (
    <div className="main-block landing-block">
      <div className="title-container">
        <h1>
          I'm <span>Iñigo</span> Molinuevo
        </h1>
        <p>
          In my portfolio you can find information about my software stack and
          personal projects.
        </p>
        <div>
          <button>Browse stack</button>
          <button>Browse projects</button>
        </div>
      </div>
      <MiniBrowser className="mini-browser" />
    </div>
  );
};

export default LandingBlock;
