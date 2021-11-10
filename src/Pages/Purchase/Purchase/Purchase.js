import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const Purchase = () => {
    return (
        <div>
            <Navigation></Navigation>
            <PlaceOrder></PlaceOrder>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;