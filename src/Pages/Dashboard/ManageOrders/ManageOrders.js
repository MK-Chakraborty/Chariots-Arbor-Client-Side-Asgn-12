import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch('https://gentle-crag-50031.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])

    return (
        <div>
            <h3 className="fw-light py-4">MANAGE ORDERS</h3>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    orders.map(order => <ManageOrder key={order._id} order={order}></ManageOrder>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;