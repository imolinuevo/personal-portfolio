import React from "react";
import githubLogo from "./github-logo.png";

const GithubIcon = () => {
  return (
    <a href="https://github.com/imolinuevo" target="_blank" rel="noreferrer">
      <img src={githubLogo} alt="github logo" className="social-icon" />
    </a>
  );
};

export default GithubIcon;
