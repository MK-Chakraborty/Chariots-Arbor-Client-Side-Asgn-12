import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;