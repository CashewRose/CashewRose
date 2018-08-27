import React, { Component } from "react";
import './Navbar.css'
import Resume from '../Resume.pdf';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#Top">Home</a>
                <a href="#Portfolio">Portfolio</a>
                <a href={Resume} target="_blank">Resume</a>
            </nav>
        );
    }
}

export default NavBar;