import React from 'react';
import Ratings from './Ratings';

const Review = ({ review }) => {
    
    const starCount = parseInt(review.star);
    let starArray = [];
    for(let i=0; i<starCount; i++) {
        starArray.push(<i className="fas fa-star"></i>);
    }
    if(review.star < 5) {
        for(let i=0; i<(5 - starCount); i++) {
            starArray.push(<i className="far fa-star"></i>);
        }
    }

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-2">
                    <i className="far fa-user-circle fs-1 py-4"></i>
                </div>
                <div className="col-md-10">
                    <div className="card-body text-start">
                        <h5 className="card-title">{review.name}</h5>
                        <h6>{review.email}</h6>
                        <p className="card-text">{review.msg}</p>
                        <h5 className="d-flex text-warning">{starArray.map(star => <Ratings key={starArray.indexOf(star)} star={star}></Ratings>)}</h5>
                        <p className="card-text"><small className="text-muted">On, {review.date}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;