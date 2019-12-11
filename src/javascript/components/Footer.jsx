import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Head extends Component {

    render() {
        return (
            <Container className='text-center foot'>
                <style type="text/css">
                    {`
                        .foot {
                            background-color: #000 !important;
                            color: #fff;
                        }

                        p{
                            margin-bottom: 0;
                        }
                    `}
                </style>
                <Row>
                    <Col sm={12}>
                        <p>Copyright © 2019 (Business Name). All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Head;
