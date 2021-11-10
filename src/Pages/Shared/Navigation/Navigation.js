import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Container fluid className="px-0">
                <Navbar bg="dark" variant="dark" expand="lg" className="bg-gradient">
                    <Container>
                        <Navbar.Brand><NavLink to="/" className="text-decoration-none text-white"><i className="fas fa-chess-king"></i> Chariots-Arbor</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <NavLink to="/dashboard" className="text-decoration-none px-2 text-white"><i className="far fa-user-circle"></i> User</NavLink>
                                <NavLink to="/home" className="text-decoration-none px-2 text-white">Home</NavLink>
                                <NavLink to="/explore" className="text-decoration-none px-2 text-white">Explore</NavLink>
                                <NavLink to="/dashboard" className="text-decoration-none px-2 text-white">DashBoard</NavLink>
                                <NavLink to="/login" className="text-decoration-none px-2 text-white">Log In</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Navigation;