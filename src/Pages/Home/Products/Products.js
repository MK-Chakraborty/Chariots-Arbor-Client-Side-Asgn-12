import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://gentle-crag-50031.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    if(!products?.length) {return <Spinner animation="border" />}
    const bestProducts = products.slice(0,6);

    return (
        <Container className="my-5">
            <h3><span className="pe-1">B</span><span className="pe-1">e</span><span className="pe-1">s</span><span className="pe-1">t</span> <span className="border-0 border-bottom border-3 border-dark">PRODUCTS</span></h3>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    bestProducts.map(product => <Product key={product?._id} product={product}></Product>)
                }
            </div>
        </Container>
    );
};

export default Products;