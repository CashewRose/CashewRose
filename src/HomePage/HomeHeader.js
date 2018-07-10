import React, { Component } from 'react';
import logo from './logo.svg';
import './HomeHeader.css';


class HomeHeader extends Component {

  state = {
    welcome: "Welcome to Cashew Rose's personal website!",
    i: 0
  }

    // Creates a typewriter like function so the text gets displayed slowly
    typeWriter = function() {
      let txt = this.state.welcome
      let speed = 60; /* The speed/duration of the effect in milliseconds */
    if (document.getElementById("typewriter") !== null) {
      if(this.state.i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(this.state.i);
        this.state.i++;
        setTimeout(this.typeWriter, speed);
      }
      else {
        this.state.i = 0;
      }
    }
  }.bind(this)


componentDidMount() {
  this.typeWriter();
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" id="typewriter">{}</h1>
        </header>
      </div>
    );
  }
}

export default HomeHeader;
