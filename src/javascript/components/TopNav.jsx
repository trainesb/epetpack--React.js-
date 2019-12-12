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

                        .navbar-text {
                            color: #fff !important;
                        }

                        .bg-dark {
                            background-color: #000 !important;
                        }
                    `}
                    </style>
                    
                    <Navbar.Brand href='/'>
                	   <Image src={Logo} roundedCircle />
                       <Navbar.Text>Pet Pack, LLC</Navbar.Text>
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link href="/members">Members</Nav.Link>
                    </Nav>

                    

                </Navbar>
            </Container>
        );
    }
}

export default TopNav;
