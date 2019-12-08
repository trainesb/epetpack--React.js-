import React, {Component} from 'react';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class BodyCard extends Component {
    render() {
        return (
        	<Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Card Description...
                    </Card.Text>
                    <Button variant="primary">Go Somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default BodyCard;
