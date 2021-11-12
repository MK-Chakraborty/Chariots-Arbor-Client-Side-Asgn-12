import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user, admin} = useAuth();
    return (
        <div>
            <h3 className="fw-light py-4">{admin ? "ADMIN DASHBOARD" : "USER DASHBOARD"}</h3>
            <h5 className="fs-5 text-start lh-lg">Welcome {user.displayName}. 
            Your are an honorable {admin? "Admin": "User"}. That's why we care 
            about your valuable time. So bring all controll in one place just 
            for you. Using this dashboard you can 
            {admin ? " Manage All Orders, Add New Product, Make Authorized Admin, & Manage Products": 
            " Make Payment, Manage Your Orders, & Give Feedback"}. Have a amazing
            browsing, and have a good day!</h5>
        </div>
    );
};

export default DashboardHome;