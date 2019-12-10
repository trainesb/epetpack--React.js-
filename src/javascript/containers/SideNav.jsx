import React, { Component } from 'react';

import Link from '../presentational/Link.jsx';

import '../../scss/sidenav.scss';

class SideNav extends Component {
    constructor (props){
        super(props);

        this.state = {
            scrollPosition: 0,
            fixhead: false,
            activeClasses: [true, false, false, false, false, false, false, false],
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

        if(scroll > 77 && !this.state.fixhead) {
            this.setState({
                scrollPosition: scroll,
                fixhead: true
            });

            document.getElementsByClassName('side-nav')[0].classList.add('fixed');
        }
        else if(scroll < 77 && this.state.fixhead) {
            this.setState({
                scrollPosition: scroll,
                fixhead: false
            });

            document.getElementsByClassName('side-nav')[0].classList.remove('fixed');
        }
    }

    handleClick(index) {
        const old = document.getElementsByClassName('active').classList;
        console.log('Old: ' + old);
        console.log('\nIndex: '+ this.state.activeClasses[index]);
    }

    render() {
        const activeClasses = this.state.activeClasses.slice();
        return (
            <div className='side-nav' onScroll={this.handleScroll}>
                <div className='left-box'></div>
                <div className='right-box'>
                    <Link active={activeClasses[0]} path={'/'} text={'Home'} onClick={this.handleClick(0)} />
                    <Link active={activeClasses[1]} path={'/shop'} text={'Shop'} onClick={this.handleClick(1)} />
                    <Link active={activeClasses[2]} path={'/mission'} text={'Mission'} onClick={this.handleClick(2)} />
                    <Link active={activeClasses[3]} path={'/about'} text={'About'} onClick={this.handleClick(3)} />
                    <Link active={activeClasses[4]} path={'/login'} text={'Login'} onClick={this.handleClick(4)} />
                    <Link active={activeClasses[5]} path={'/reviews'} text={'Reviews'} onClick={this.handleClick(5)} />
                    <Link active={activeClasses[6]} path={'/faq'} text={'FAQ'} onClick={this.handleClick(6)} />
                    <Link active={activeClasses[7]} path={'/contact'} text={'Contact'} onClick={this.handleClick(7)} />
                </div>
            </div>
        );
    }
}

export default SideNav;
