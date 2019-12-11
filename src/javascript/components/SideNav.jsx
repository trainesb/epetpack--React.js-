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
                <Navbar bg='dark' variant='dark'>
                    <style type="text/css">
                    {`
                        .container {
                            padding-left: 0;
                        }

                        .bg-dark {
                            background-color: #000 !important;
                        }

                        .nav-link {
                            color: #fff !important;
                        }

                        .nav-link:hover,
                        .nav-link:focus {
                            color: grey !important;
                        }
                    `}
                    </style>
                    
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/mission">Mission</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/pack-members">Pack Members</Nav.Link>
                        <Nav.Link href="/reviews">Reviews</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>

                </Navbar>
            </Container>
        );
    }
}

export default SideNav;
