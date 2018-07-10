import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Resume">Resume</Link>
            </nav>
        );
    }
}

export default NavBar;