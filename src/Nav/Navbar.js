import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import Resume from '.././Technical_Resume_PDF.pdf';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <a href={Resume} target="_blank">Resume</a>
            </nav>
        );
    }
}

export default NavBar;