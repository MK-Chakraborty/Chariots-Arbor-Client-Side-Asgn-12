import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import upcomming from '../../../images/upcomming.jpg'

const Upcomming = () => {
    return (
        <Container>
            <h6 className="text-secondary fw-bold">FUTURE VEHICLES</h6>
            <h3 className="lh-lg">
                <span className="pe-1">U</span>
                <span className="pe-1">p</span>
                <span className="pe-1">c</span>
                <span className="pe-1">o</span>
                <span className="pe-1">m</span>
                <span className="pe-1">i</span>
                <span className="pe-1">n</span>
                <span className="pe-1">g </span>
                <span className="border-0 border-bottom border-3 border-dark">RELEASES</span></h3>
            <h5 className="fw-light pt-2 mb-5">DISCOVER THE NEW 2022 Chariots-Arbor RELEASES.</h5>
            <Row>
                <Col xs={12} sm={12} md={9} lg={9}>
                    <img src={upcomming} className="w-100 mb-5" alt="" />
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} className="d-flex align-items-center">
                    <div>
                        <h6 className="text-secondery">INTRODUCING</h6>
                        <h3>2022 Chariots-Arbor CLS Coupe!</h3>
                        <p>A 4-door coupe with infinite appeal.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Upcomming;