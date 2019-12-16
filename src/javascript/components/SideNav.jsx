import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import Logo from '../../images/CatPack_Logo.png';

class SideNav extends Component {

    render() {
        return (
            <Container>
                <style type="text/css">
                {`
                    .container {
                        padding-left: 0;
                        padding-right: 0;
                    }

                    .nav-link {
                        color: #fff !important;
                        background-color: #000 !important;
                    }

                    .nav-link:hover,
                    .nav-link:focus {
                        color: #000 !important;
                        background-color: #fff !important;
                    }
                `}
                </style>
                
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/mission">Mission</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    
                    <Nav.Link href="/reviews">Reviews</Nav.Link>
                    <Nav.Link href="/faq">FAQ</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        );
    }
}

export default SideNav;
