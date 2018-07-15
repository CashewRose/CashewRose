import React, { Component } from 'react';
import Footer from './Footer';
import HomeHeader from './HomeHeader';
import About from './About/AboutMe';
import SelfCard from './About/MyselfInfo';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <HomeHeader />
                <SelfCard />
                <Footer />
            </ React.Fragment>
        )
    }
}

export default Home;