import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Apropos from "../components/Apropos";
import Competence from "../components/Competence";
import Project from "../components/Project";

function Portfolio() {
  return (
    <>      
        <Header/>
        <Home/>
        <Apropos/>
        <Competence/>
        <Project/>
    </>
  );
}

export default Portfolio;