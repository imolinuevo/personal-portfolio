import React from "react";
import "./FooterBlock.css";
import GithubIcon from "../social-icons/GithubIcon";
import LinkedinIcon from "../social-icons/LinkedinIcon";

const FooterBlock = () => {
  return (
    <div className="main-block footer-block">
      <div className="footer-content">
        <h1>Contact me</h1>
        <p>
          If you liked my portfolio consider contacting me for further
          professional information through my social networks.
        </p>
        <div className="social-footer">
          <GithubIcon />
          <LinkedinIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterBlock;
