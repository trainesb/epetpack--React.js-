import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav';

import '../../scss/sidenav.scss';


class SideNav extends Component {
    render() {
        return (
        	<Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link className='nav-link' eventKey="/shop">Shop</Nav.Link>
                <Nav.Link className='nav-link' eventKey="/mission">Mission</Nav.Link>
                <Nav.Link className='nav-link' eventKey="/about">About</Nav.Link>
                <Nav.Link className='nav-link' eventKey="/pack-members">Pack Members</Nav.Link>
                <Nav.Link className='nav-link' eventKey="/reviews">Reviews</Nav.Link>
                <Nav.Link className='nav-link' eventKey="/faq">FAQ</Nav.Link>
                <Nav.Link className='nav-link' eventKey="/contact">Contact</Nav.Link>
            </Nav>
        );
    }
}

export default SideNav;
