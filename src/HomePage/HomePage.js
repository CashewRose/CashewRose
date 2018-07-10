import React, { Component } from 'react';
import Footer from './HomeFooter';
import HomeHeader from './HomeHeader';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <HomeHeader />
                <Footer />
            </ React.Fragment>
        )
    }
}

export default Home;