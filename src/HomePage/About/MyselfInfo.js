import React, { Component } from 'react';
import './MyselfInfo.css'
import image from './copy.jpg'
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import About from './AboutMe';

class SelfCard extends Component {
    render(){
        return(
            <div className='Contain'>
                <div className='AboutCard'>
                    <img className="me" src={image}></img>
                    <a className="contact" href="https://github.com/CashewRose/">
                        <FontAwesomeIcon icon={faGithubAlt} /> Github</a>
                    <a className="contact" href="https://www.linkedin.com/in/cashew-agnoletti-442910165">
                        <FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
                    <a className="contact" href="mailto:danieagnolett@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} /> Email</a>
                </div>    
                <About />
            </div>
        )
    }
}

export default SelfCard;