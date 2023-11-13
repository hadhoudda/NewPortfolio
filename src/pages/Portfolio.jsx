import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Apropos from "../components/Apropos";
import Competence from "../components/Competence";
import Projects from "../components/Projects";
import Contact from "../components/Contact"
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <>      
        <Header/>
        <Home/>
        <Apropos/>
        <Competence/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default Portfolio;