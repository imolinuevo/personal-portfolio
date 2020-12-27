import React from "react";
import { ReactComponent as MiniBrowser } from "./mini-browser.svg";
import "./LandingBlock.css";

const LandingBlock = () => {
  return (
    <div className="main-block landing-block">
      <MiniBrowser className='mini-browser'/>
    </div>
  );
};

export default LandingBlock;
