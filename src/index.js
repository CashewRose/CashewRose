import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import NavBar from './Nav/Navbar';
import Portfolio from './Portfolio/Portfolio';
import './index.css';
import Home from './HomePage/HomePage';



ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={Home} />
        </div>
    </Router>
), document.querySelector("#root"))
registerServiceWorker();