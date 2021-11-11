import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user.email])

    return (
        <Container>
            <h3 className="fw-light py-4">MY ORDERS</h3>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    orders.map(order => <MyOrder key={order._id} order={order}></MyOrder>)
                }
            </div>
        </Container>
    );
};

export default MyOrders;