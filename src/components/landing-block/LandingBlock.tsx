import React from "react";
import { ReactComponent as MiniBrowser } from "./mini-browser.svg";
import "./LandingBlock.css";

const LandingBlock = () => {
  return (
    <div className="main-block landing-block">
      <MiniBrowser className="mini-browser" />
      <div className="title-container">
        <h1>Foo</h1>
      </div>
    </div>
  );
};

export default LandingBlock;
