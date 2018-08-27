import React, { Component } from 'react';
import Footer from './Footer/Footer';
import HomeHeader from './Header/HomeHeader';
import SelfCard from './About/MyselfInfo';
import Portfolio from './Portfolio/Portfolio';
import NavBar from '../Nav/Navbar';
class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <HomeHeader />
                <NavBar />
                <SelfCard />
                <Portfolio />
                <Footer />
            </ React.Fragment>
        )
    }
}

export default Home;