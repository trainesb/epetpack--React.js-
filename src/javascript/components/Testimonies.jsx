import React, {Component} from 'react';

import Image from 'react-bootstrap/Image';
import Toast from 'react-bootstrap/Toast';


class Testimonies extends Component {
    render() {
        return (
            <Toast>
                <Toast.Header>
                    <Image src='' rounded/>
                    <strong className='mr-auto'>Name</strong>
                    <small>11 min ago</small>
                </Toast.Header>

                <Toast.Body>Testimony...</Toast.Body>
            </Toast>
        );
    }
}

export default Testimonies;
