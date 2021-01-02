import React from "react";
import "./App.css";
import "./components/social-icons/social-icons.css";
import LandingBlock from "./components/landing-block/LandingBlock";
import StackBlock from "./components/stack-block/StackBlock";
import ProjectsBlock from "./components/projects-block/ProjectsBlock";
import FooterBlock from "./components/footer-block/FooterBlock";

function App() {
  return (
    <React.Fragment>
      <LandingBlock />
      <StackBlock />
      <ProjectsBlock />
      <FooterBlock />
    </React.Fragment>
  );
}

export default App;
