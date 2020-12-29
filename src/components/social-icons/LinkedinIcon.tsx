import React from "react";
import linkedinLogo from "./linkedin-logo.png";

const LinkedinIcon = () => {
  return (
    <a
      href="https://www.linkedin.com/in/i%C3%B1igo-molinuevo-37473885/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={linkedinLogo} alt="linkein logo" className="social-icon" />
    </a>
  );
};

export default LinkedinIcon;
