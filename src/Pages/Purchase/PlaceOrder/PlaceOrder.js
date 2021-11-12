import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();

    // get current date
    const today = new Date().toLocaleDateString();

    const { register, handleSubmit, reset } = useForm();

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://gentle-crag-50031.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])

    const onSubmit = data => {
        fetch('https://gentle-crag-50031.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Congratulation!!! Your Payment Is Complete. Your Vehical Will be delivered at your provided address within 15 days (including ownership registration process). Thank You!');
                    reset();
                }
            });
    };

    return (
        <Container fluid className="px-0">
            <img src={product.img} className="w-100" alt="" />
            <Container className="my-5">
                <h3 className="fw-bold lh-lg"><span className="border-0 border-bottom border-dark">{product.model}</span></h3>
                <h3 className="fw-light">By, {product.brand}</h3>
                <h5 className="text-start fw-light lh-lg">{product.desp}</h5>
                <h4>Buying Cost: {product.cost} $ [Without VAT]</h4>
                <Row>
                    <Col>
                        <h3 className="pt-5 pb-3 fw-light border-0 border-bottom border-3 border-dark">Provide Necessary Informations to Buy This Car</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                            <input {...register("fullName", { maxLength: 100 })} value={user.displayName} placeholder="Full Name" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                            <input type="email" {...register("email")} value={user.email} placeholder="Email" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                            <input type="text" {...register("date")} value={today} placeholder="Date" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                            <input type="tel" {...register("phone", { required: true })} placeholder="Contact Number" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                            <input type="text" {...register("address", { required: true })} placeholder="Delivery Address" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                            <input {...register("message", { maxLength: 300 })} placeholder="Custom Requirements" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                            <input {...register("transactionID", { required: true, maxLength: 100 })} placeholder="Transaction ID" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                            <input {...register("productId", { maxLength: 300 })} value={id} placeholder="Service Id" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                            <input type="submit" value="Place Order" className="bg-dark bg-gradient text-white fs-5 fw-bold rounded mt-3 py-3 w-50 mx-auto" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default PlaceOrder;