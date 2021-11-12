import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import mbLogo from '../../../../images/mb_Logo.png'

const ManageOrder = ({order}) => {
    const id = order.productId;
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://gentle-crag-50031.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    const handleClick = (orderId) => {
        const proceed = window.confirm('Are you sure, You wnat to cancel this order?');
        if (proceed) {
            fetch(`https://gentle-crag-50031.herokuapp.com/order/${orderId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('An order gets deleted.');
                        window.location.reload()
                    }
                });
        }
    }
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img src={mbLogo} className="w-75 mx-auto" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product?.model}</h5>
                        <h6 className="text-start">{order.fullName}</h6>
                        <h6 className="text-start">Contact No: {order.phone}</h6>
                        <h6 className="text-start">Email: {order.email}</h6>
                        <h6 className="text-start">Delivery Location: {order.address}</h6>
                        <p className="text-start">{order.message ? order.message : "No Custom Requirements"}</p>
                        <p className="text-start"><small className="text-muted">Order Date: {order.date}</small></p>
                        <Button onClick={() => handleClick(order._id)} variant="dark" className="bg-gradient float-end mb-3">Cancel Order</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;