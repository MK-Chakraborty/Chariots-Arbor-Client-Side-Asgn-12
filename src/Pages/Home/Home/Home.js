import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Overview from '../Overview/Overview';
import Products from '../Products/Products';
import Upcomming from '../Upcomming/Upcomming';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Upcomming></Upcomming>
            <Overview></Overview>
            <Footer></Footer>
        </div>
    );
};

export default Home;