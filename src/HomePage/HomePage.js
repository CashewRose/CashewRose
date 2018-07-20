import React, { Component } from 'react';
import Footer from './Footer/Footer';
import HomeHeader from './Header/HomeHeader';
import SelfCard from './About/MyselfInfo';
import Portfolio from '../Portfolio/Portfolio';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <HomeHeader />
                <SelfCard />
                <Portfolio />
                <Footer />
            </ React.Fragment>
        )
    }
}

export default Home;