import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/purchase');
    }
    return (
        <Card style={{ width: '24rem', margin: '20px 0px' }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title className="fs-3 fw-light lh-lg">{product.model}</Card.Title>
                <Card.Text className="fs-6 lh-lg">
                    {product.desp.slice(0,100)} . . .
                </Card.Text>
                <Button onClick={handleClick} variant="dark" className="bg-gradient">ACQUIRE</Button>
            </Card.Body>
        </Card>
    );
};

export default Product;