import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Payment = () => {
    const pay = () => {
        alert('Congratulation! Payment Completed');
    }
    return (
        <Container className="py-5">
            <h3 className="fw-light pb-4">PAY WITH</h3>
            <div className="d-flex flex-wrap justify-content-around">
            <Button onClick={pay} variant="dark" className="bg-varient m-3" style={{fontSize: "80px"}}><i className="fab fa-cc-paypal"></i></Button>
            <Button onClick={pay} variant="dark" className="bg-varient m-3" style={{fontSize: "80px"}}><i className="fab fa-cc-apple-pay"></i></Button>
            <Button onClick={pay} variant="dark" className="bg-varient m-3" style={{fontSize: "80px"}}><i className="fab fa-cc-visa"></i></Button>
            <Button onClick={pay} variant="dark" className="bg-varient m-3" style={{fontSize: "80px"}}><i className="fab fa-cc-mastercard"></i></Button>
            <Button onClick={pay} variant="dark" className="bg-varient m-3" style={{fontSize: "80px"}}><i className="fab fa-cc-stripe"></i></Button>
            </div>
        </Container>
    );
};

export default Payment;