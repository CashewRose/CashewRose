import React, { Component } from 'react';
import totoro from './totoro.jpg'
import './Portfolio.css'


class Portfolio extends Component {
    
    state = {
      projects: [
      {
        title: "Ghibli Chronicles",
        image: totoro,
        link: 'http://frontendcapstone.s3-website.us-east-2.amazonaws.com/',
        about: "Ghibli Chronicles is a build your own adventure game featuring lovable characters from a celebrated japanese movie studio. I wanted to make something that used HTML, CSS, and React in a way that it wasn't normally used. I strived to create something where the players would be able to chose their own path through the games story. Be it playing with their favorite companion through the whole game or by themselves at times. I created a unique story experience each time a player chose to start the game using basic front-end knowledge."
      }
    ]
    }

    render() {
      return (
        <React.Fragment>
            <h2 id="Portfolio">Portfolio</h2>
            {this.state.projects.map((card, index) =>(
              <div className="cards" key={index}>
                <a href={card.link}>
                  <h3>{card.title}</h3>
                  <img className="card" src={card.image}/>
                  <p className="mobileButton">Click Here To Visit My Site!</p>
                  <p className='about'>{card.about}</p>
                </a>
              </div>
            ))}
        </React.Fragment>
      );
    }
  }
  
export default Portfolio;
  