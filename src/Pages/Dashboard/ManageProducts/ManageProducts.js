import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ManageProduct from './ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://gentle-crag-50031.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    if(!products?.length) {return <Spinner animation="border" />}

    return (
        <div>
            <h3 className="fw-light py-4">MANAGE PRODUCT</h3>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;