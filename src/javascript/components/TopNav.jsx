import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

import Logo from '../../images/CatPack_Logo.png';

class TopNav extends Component {

    render() {
        return (
            <Container>
            	<Navbar bg='dark' variant='dark'>
                    <style type="text/css">
                    {`
                        .rounded-circle {
                            height: inherit;
                        }

                        .navbar-brand {
                            height: 50px;
                        }

                        .navbar-brand:hover span,
                        .navbar-brand:focus span {
                            color: grey !important;
                        }

                        .navbar-text {
                            color: #fff !important;
                        }

                        .place-end {
                            margin-left: auto;
                        }

                        .bg-dark {
                            background-color: #000 !important;
                        }

                        .nav-link {
                            height: auto;
                            padding: 12px 12px;
                        }
                    `}
                    </style>
                    
                    <Navbar.Brand href='/'>
                	   <Image src={Logo} roundedCircle />
                       <Navbar.Text>Pet Pack, LLC</Navbar.Text>
                    </Navbar.Brand>

                    <Nav className='place-end'>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>

                    

                </Navbar>
            </Container>
        );
    }
}

export default TopNav;
