import React from "react";
import NavBar from "./NavBar";
import { Router } from "@reach/router";
import "../assets/styles/App.scss";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Portfolio from "../pages/Portfolio";
import Projects from "../pages/Projects";

const App = () => {
  const navlinks = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Contacto",
      path: "/contact-me",
    },
  ];
  return (
    <React.Fragment>
      <NavBar navlinks={navlinks}></NavBar>
      <Router>
        <Home path="/" />
        <Blog path="/blog" />
        <Portfolio path="/portfolio" />
        <Contact path="/contact-me" />
        <Projects path="/projects" />
      </Router>
    </React.Fragment>
  );
};

export default App;
