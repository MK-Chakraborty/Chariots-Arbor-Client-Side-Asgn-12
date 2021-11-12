import React from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    return (
        <div>
            <h3 className="fw-light py-4">MAKE ADMIN</h3>
            <input type="email" name="email" placeholder="Email" className="border-0 border-bottom border-3 fs-6 fw-bold py-3 w-75" />
            <Button variant="outline-dark" className="bg-gradient mt-3">Make Admin</Button>
        </div>
    );
};

export default MakeAdmin;