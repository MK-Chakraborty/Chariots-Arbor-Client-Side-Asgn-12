import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Review from './Review/Review';

const Overview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <Container className="my-5">
            <h3 className="mb-5"><span className="pe-1">U</span><span className="pe-1">s</span><span className="pe-1">e</span><span className="pe-1">r</span> <span className="border-0 border-bottom border-3 border-dark">REVIEW</span></h3>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </Container>
    );
};

export default Overview;