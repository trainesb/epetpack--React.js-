import React, { Component } from 'react';

import Button from '../presentational/Button.jsx';

import '../../scss/sidenav.scss';

class SideNav extends Component {
    constructor (props){
        super(props);

        this.state = {
            scrollPosition: 0,
            fixhead: false
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const scroll = window.scrollY;

        if(scroll > 89 && !this.state.fixhead) {
            this.setState({
                scrollPosition: scroll,
                fixhead: true
            });

            document.getElementsByClassName('side-nav')[0].classList.add('fixed');
        }
        else if(scroll < 89 && this.state.fixhead) {
            this.setState({
                scrollPosition: scroll,
                fixhead: false
            });

            document.getElementsByClassName('side-nav')[0].classList.remove('fixed');
        }

        console.log(scroll);
    }

    render() {
        return (
            <div className='side-nav' onScroll={this.handleScroll}>
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
