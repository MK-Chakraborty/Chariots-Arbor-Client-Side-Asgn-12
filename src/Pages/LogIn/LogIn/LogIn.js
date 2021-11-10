import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
    return (
        <Container className="p-5">
            <Row className="py-5">
                <Col xs={12} sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} className="border border-3 border-dark p-5 rounded-3 bg-dark bg-gradient text-white">
                    <h1><i className="fas fa-chess-king"></i> Chariots-Arbor</h1>
                    <h2 className="border-0 border-bottom border-3 lh-lg">Log In</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <h6>New Here? Please Register to Log In. <NavLink to="/register" className="text-white lh-lg">Create Account.</NavLink></h6>
                        <Button variant="outline-light" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LogIn;