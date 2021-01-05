import { IProject } from "./IProject";

const projectList: IProject[] = [
  {
    title: "Poke Dux",
    description:
      "This project is a full Angular demo application that allows to browse pokemons from the pokemon api and add them to your bag.",
    tags: ["Angular", "Material", "RxJs", "NgRx"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A handcrafted full stack developer portfolio where you can find information about my software stack and personal projects.",
    tags: ["React", "TypeScript", "CSS 3", "Figma"],
  },
  {
    title: "Widow Sweeper",
    description:
      "The aim of this project is to provide a simple CLI using python 3 in order to evaluate HTTP security headers defined by OWASP Security Headers.",
    tags: ["Python 3", "CLI", "OWASP"],
  },
  {
    title: "Local Redis Python",
    description: "Local Redis (ReJson) docker example with python connection.",
    tags: ["Redis", "docker", "docker-compose", "Python 3"],
  },
  {
    title: "Local Code Analysis",
    description:
      "A self communicated cluster for local code analysis using dockerized jenkins and sonarqube.",
    tags: ["docker", "Jenkins", "SonarQube", "docker-compose"],
  },
];

export default projectList;
