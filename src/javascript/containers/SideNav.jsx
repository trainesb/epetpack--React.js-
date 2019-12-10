import React, { Component } from 'react';

import Button from '../presentational/Button.jsx';

import '../../scss/sidenav.scss';

class SideNav extends Component {

    render() {
        return (
            <div className='side-nav'>
                <Button path={'/shop'} text={'Shop'} />
                <Button path={'/mission'} text={'Mission'} />
                <Button path={'/about'} text={'About'} />
                <Button path={'/pack-members'} text={'Pack Members'} />
                <Button path={'/reviews'} text={'Reviews'} />
                <Button path={'/faq'} text={'FAQ'} />
                <Button path={'/contact'} text={'Contact'} />
            </div>
        );
    }
}

export default SideNav;
