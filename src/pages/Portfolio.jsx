import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Apropos from "../components/Apropos";
import Competence from "../components/Competence";
import Projects from "../components/Projects";

function Portfolio() {
  return (
    <>      
        <Header/>
        <Home/>
        <Apropos/>
        <Competence/>
        <Projects/>
    </>
  );
}

export default Portfolio;