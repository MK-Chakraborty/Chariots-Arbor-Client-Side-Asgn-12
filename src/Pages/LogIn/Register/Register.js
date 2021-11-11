import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, registerUser} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Didn\'t Matched.');
            return;
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    return (
        <Container className="p-5">
            <Row className="py-5">
                <Col xs={12} sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} className="border border-3 border-dark p-5 rounded-3 bg-dark bg-gradient text-white">
                    <h1><i className="fas fa-chess-king"></i> Chariots-Arbor</h1>
                    <h2 className="border-0 border-bottom border-3 lh-lg">Create Account</h2>
                    <Form onSubmit={handleLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="userName"
                                onBlur={handleOnBlur}
                                placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                placeholder="Retype Password" />
                        </Form.Group>

                        <h6>Already Registered? Please Log In. <NavLink to="/login" className="text-white lh-lg">Log In</NavLink></h6>
                        <Button variant="outline-light" type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;