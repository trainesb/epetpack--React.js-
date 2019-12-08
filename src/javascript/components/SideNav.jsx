import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import Nav from 'react-bootstrap/Nav';

import '../../scss/sidenav.scss';


class SideNav extends Component {
    render() {
        return (
        	<Nav defaultActiveKey="/home" className="flex-column">
                <Link className='nav-link' to="/shop">Shop</Link>
                <Link className='nav-link' to="/mission">Mission</Link>
                <Link className='nav-link' to="/about">About</Link>
                <Link className='nav-link' to="/pack-members">Pack Members</Link>
                <Link className='nav-link' to="/reviews">Reviews</Link>
                <Link className='nav-link' to="/faq">FAQ</Link>
                <Link className='nav-link' to="/contact">Contact</Link>
            </Nav>
        );
    }
}

export default SideNav;
