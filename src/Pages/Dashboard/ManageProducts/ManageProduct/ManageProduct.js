import React from 'react';
import { Button } from 'react-bootstrap';

const ManageProduct = ({ product }) => {
    // const handleClick = (orderId) => {
    //     const proceed = window.confirm('Are you sure, You wnat to cancel your order?');
    //     if (proceed) {
    //         fetch(`https://gentle-crag-50031.herokuapp.com/`, {
    //             method: ''
    //         })
    //             .then(res => res.json())
    //             .then(result => {
    //                 if (result.deletedCount) {
    //                     alert('Your Order Cancelled. You will get your refaund within 15 days. Thank You!');
    //                     window.location.reload()
    //                 }
    //             });
    //     }
    // }
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img src={product.img} className="w-100  mx-auto" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.model}</h5>
                        <h6 className="text-start">By, {product.brand}</h6>
                        <h6 className="text-start">Cost: {product.cost} $</h6>

                        <Button variant="dark" className="bg-gradient float-end mb-3">Declare Unavailable</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;