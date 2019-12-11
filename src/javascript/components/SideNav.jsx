import React, {Component} from 'react';


import Nav from 'react-bootstrap/Nav';

import '../../scss/sidenav.scss';


class SideNav extends Component {
    render() {
        return (
        	<Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/shop">Shop</Nav.Link>
                <Nav.Link href="/mission">Mission</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/pack-members">Pack Members</Nav.Link>
                <Nav.Link href="/reviews">Reviews</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        );
    }
}

export default SideNav;
