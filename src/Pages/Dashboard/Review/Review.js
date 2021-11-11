import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    // get current date
    const today = new Date().toLocaleDateString();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Thank You for your valuable feedback!');
                    reset();
                }
            });
    };
    return (
        <Container>
            <h3 className="fw-light py-4">Please Leave Your Valuable Feedback.</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input {...register("name", { maxLength: 100 })} value={user.displayName} placeholder="Full Name" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                <input type="email" {...register("email")} value={user.email} placeholder="Email" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                <input {...register("msg", { maxLength: 600 })} placeholder="Feedback" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                <input type="number" {...register("star", { maxLength: 1 })} placeholder="Rate 1 2 3 4 5" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                <input type="text" {...register("date")} value={today} placeholder="Date" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                <input type="submit" value="Place Order" className="bg-dark bg-gradient text-white fs-5 fw-bold rounded mt-3 py-3 w-50 mx-auto" />
            </form>
        </Container>
    );
};

export default Review;