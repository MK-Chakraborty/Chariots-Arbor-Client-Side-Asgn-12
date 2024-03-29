import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Product from '../../Home/Products/Product/Product';

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://gentle-crag-50031.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    if(!products?.length) {return <Spinner animation="border" />}

    return (
        <Container className="my-5">
            <h3><span className="pe-1">A</span><span className="pe-1">l</span><span className="pe-1">l</span> <span className="border-0 border-bottom border-3 border-dark"> VEHICLES</span></h3>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    products.map(product => <Product key={product?._id} product={product}></Product>)
                }
            </div>
        </Container>
    );
};

export default ExploreProducts;