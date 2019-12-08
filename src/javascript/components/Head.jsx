import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import '../../scss/head.scss';

class Head extends Component {

    render() {
        return (
        	<Container className='head'>
        		<Row>
        			<Col sm={2}>
        				<Image src="holder.js/171x180" roundedCircle />
        			</Col>
        			<Col className='text-center' sm={8}>Pet Pack, LLC</Col>
        			<Col sm={2}>
        				<Image src="holder.js/171x180" roundedCircle />
        			</Col>
        		</Row>
        	</Container>
        );
    }
}

export default Head;
