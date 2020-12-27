import React from "react";
import "./App.css";
import LandingBlock from "./components/landing-block/LandingBlock";
import StackBlock from "./components/StackBlock";
import ProjectsBlock from "./components/ProjectsBlock";
import FooterBlock from "./components/FooterBlock";

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
