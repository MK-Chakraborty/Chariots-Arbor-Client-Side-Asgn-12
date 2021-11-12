import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const authorizeAdimn = e => {
        const user = { email };
        fetch('https://gentle-crag-50031.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <h3 className="fw-light py-4">MAKE ADMIN</h3>
            <form onSubmit={authorizeAdimn}>
                <input type="email" name="email" onBlur={handleOnBlur} placeholder="Email" className="border-0 border-bottom border-3 fs-6 fw-bold py-3 w-75" />
                <Button type="submit" variant="outline-dark" className="bg-gradient mt-3">Make Admin</Button>
            </form>
            {success && <Alert variant="success" className="mx-2 my-3">Admin Authorized Successfully.</Alert>}
        </div>
    );
};

export default MakeAdmin;