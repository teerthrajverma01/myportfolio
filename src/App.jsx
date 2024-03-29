import { Fragment } from "react";
import Navbar from "./components/Navbar.jsx";
import MySelf from "./components/MySelf.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import GitIgnore from "./components/GitIgnore.jsx";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <MySelf />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <GitIgnore />
      </main>
    </Fragment>
  );
};

export default App;
