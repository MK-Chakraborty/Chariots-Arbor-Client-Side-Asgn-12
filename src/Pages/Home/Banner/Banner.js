import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import banner1 from '../../../images/banner-1.png'
import banner2 from '../../../images/banner-2.png'
import banner3 from '../../../images/banner-3.png'

const Banner = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/explore')
    }
    return (
        <Container fluid className="px-0">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="d-block d-md-none">Winter Event</h3>
                        <h3 className="d-none d-md-block">The Chariots-Arbor Winter Event</h3>
                        <Button onClick={handleClick} variant="dark" className="bg-gradient">Explore More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="d-block d-md-none">Home of Luxury Cars!</h3>
                        <h3 className="d-none d-md-block">The Chariots-Arbor, Home of Luxury Cars!</h3>
                        <Button onClick={handleClick} variant="dark" className="bg-gradient">Explore More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="d-block d-md-none">Baneficial Car Deller </h3>
                        <h3 className="d-none d-md-block">The Chariots-Arbor, Your Baneficial Car Deller. </h3>
                        <Button onClick={handleClick} variant="dark" className="bg-gradient">Explore More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;