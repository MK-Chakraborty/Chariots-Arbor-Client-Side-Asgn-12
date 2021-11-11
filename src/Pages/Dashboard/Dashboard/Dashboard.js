import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import DashboardDrawer from '../DashboardDrawer/DashboardDrawer';

const Dashboard = () => {
    return (
        <div>
            <Navigation></Navigation>
            <DashboardDrawer></DashboardDrawer>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;