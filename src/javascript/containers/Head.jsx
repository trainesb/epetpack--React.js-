import React, { Component } from 'react';

import Image from '../presentational/Image.jsx';
import Title from '../presentational/Title.jsx';

import Logo from '../../images/CatPack_Logo_Print.png';

import '../../scss/head.scss';


class Head extends Component {
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

        if(scroll > 77 && !this.state.fixhead) {
            this.setState({
                scrollPosition: scroll,
                fixhead: true
            });

            document.getElementsByClassName('head')[0].classList.add('fixed');
        }
        else if(scroll < 77 && this.state.fixhead) {
            this.setState({
                scrollPosition: scroll,
                fixhead: false
            });

            document.getElementsByClassName('head')[0].classList.remove('fixed');
        }
    }

    render() {

        return (
            <div id='head-wrapper' onScroll={this.handleScroll}>
                <div className='head-filler'></div>
            	<div className='head'>
            		<div className='left'>
                    	<Image src={Logo} alt={'Cat Pack Logo'}/>
                    </div>
                    <div className='center'>
                    	<Title title='Pet Pack, LLC' />
                    </div>
                    <div className='right'>
                    	<Image src={Logo} alt={'Cat Pack Logo'}/>
                	</div>
                </div>
            </div>
        );
    }
}

export default Head;
