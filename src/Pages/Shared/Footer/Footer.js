import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mblogo from '../../../images/mb_Logo.png'

const Footer = () => {
    return (
        <Container fluid className="bg-dark bg-gradient">
            <Container>
                <Row className="text-white">
                    <Col xs={12} sm={12} md={6} lg={3} className="my-5 d-flex align-items-center justify-content-center">
                        <div>
                            <h3><i className="fas fa-chess-king"></i> Chariots-Arbor</h3>
                            <h6 className="fw-light">Genuine Car Deller of</h6>
                            <img src={mblogo} alt="" />
                            <h3 className="fw-light">Mercedes-Benz</h3>
                            <p><i className="far fa-copyright"></i> 2021 | Chariots-Arbor</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="my-5 text-start">
                        <h3 className="fw-light border-0 border-bottom border-2">Vehicles</h3>
                        <Link to="/" className="text-decoration-none text-white"><h6>SUVs</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Sedans & Wagons</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Coupes</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Convertibles & Roadsters</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Electric</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>All Vehicles</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Future Vehicles</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Certified Pre-Owned</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Mercedes-Benz Vans</h6></Link>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="my-5 text-start">
                        <h3 className="fw-light border-0 border-bottom border-2">Discover</h3>
                        <Link to="/" className="text-decoration-none text-white"><h6>About Us</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>The Best or Nothing</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Mercedes-EQ</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>For Enthusiasts</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Events & Partnerships</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Careers</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Contact Us</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Employer & Member Programs</h6></Link>
                        <Link to="/" className="text-decoration-none text-white"><h6>Fleet Programs</h6></Link>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="my-5 text-start">
                        <h3 className="fw-light border-0 border-bottom border-2">Stay In Touch</h3>
                        <Link to="/" className="text-decoration-none text-white text-center"><h1><i className="fab fa-instagram-square"></i></h1></Link>
                        <Link to="/" className="text-decoration-none text-white text-center"><h1><i className="fab fa-facebook-square"></i></h1></Link>
                        <Link to="/" className="text-decoration-none text-white text-center"><h1><i className="fab fa-twitter-square"></i></h1></Link>
                        <Link to="/" className="text-decoration-none text-white text-center"><h1><i className="fab fa-youtube-square"></i></h1></Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;