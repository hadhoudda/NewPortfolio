import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import logo from "../assets/logo.png"
import "../styles/header.scss";

function Header() {
    return (
        <header>
            <Link to='/Portfolio'><img className ="logo" src={logo} alt='image__houda' /></Link>
            <Navbar/>
        </header>
    )
}

export default Header;