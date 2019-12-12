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
                <style type="text/css">
                    {`
                        .row {
                            margin-left: 0;
                            margin-right: 0;
                        }
                        
                        .content {
                            padding-left: 0;
                            padding-right: 0;
                        }

                        .left-content, .right-content {
                            border: solid thin black;
                        }
                    `}
                </style>

                <Row>
                    <Col className='content' sm={2}>
                        <SideNav />
                    </Col>
                    <Col className='content left-content text-center' sm={5}>


                    </Col>
                    <Col className='content right-content text-center' sm={5}>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Body;
