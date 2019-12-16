import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

import Testimonies from "./Testimonies.jsx";


class CarouselTestimonies extends Component {
    render() {
        return (
            <Container className="testimony-container">
                <style type="text/css">
                    {`
                        .testimony-container {
                            padding-top: 12px;
                            padding-bottom: 12px;
                        }
                    `}
                </style>


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
            </Container>
        );
    }
}

export default CarouselTestimonies;
