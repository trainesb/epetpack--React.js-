import React, {Component} from 'react';


import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardColumns from 'react-bootstrap/CardColumns';

import SideNav from './SideNav.jsx';
import BodyCard from './BodyCard.jsx';


class Body extends Component {
    render() {
        return (
        	<Container>
                <Row>
                    <Col sm={2}>
                        <SideNav />
                    </Col>
                    <Col className='text-center' sm={10}>
                        <CardColumns>
                            <BodyCard />
                            <BodyCard className='p-3'/>
                            <BodyCard />
                            <BodyCard />
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Body;
