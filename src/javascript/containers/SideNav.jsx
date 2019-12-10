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
        this.handleClick = this.handleClick.bind(this);
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
    }

    handleClick(event) {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    }

    render() {
        return (
            <div className='side-nav' onScroll={this.handleScroll}>
                <div className='left-box'></div>
                <div className='right-box'>
                    <Button active={true} path={'/'} text={'Home'} onClick={this.handleClick}/>
                    <Button active={false} path={'/shop'} text={'Shop'} onClick={this.handleClick}/>
                    <Button active={false} path={'/mission'} text={'Mission'} onClick={this.handleClick}/>
                    <Button active={false} path={'/about'} text={'About'} onClick={this.handleClick}/>
                    <Button active={false} path={'/pack-members'} text={'Pack Members'} onClick={this.handleClick}/>
                    <Button active={false} path={'/reviews'} text={'Reviews'} onClick={this.handleClick}/>
                    <Button active={false} path={'/faq'} text={'FAQ'} onClick={this.handleClick}/>
                    <Button active={false} path={'/contact'} text={'Contact'} onClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

export default SideNav;
