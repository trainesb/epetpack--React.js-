import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

import Testimonies from "./Testimonies.jsx";


class CarouselTestimonies extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                            <Col md={3}>
                                <Testimonies />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselTestimonies;
