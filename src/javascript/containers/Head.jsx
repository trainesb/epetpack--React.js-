import React, { Component } from 'react';

import Figure from '../presentational/Figure.jsx';
import Title from '../presentational/Title.jsx';

import Logo from '../../images/CatPack_Logo_Print.png';

import '../../scss/head.scss';


class Head extends Component {
    render() {

        return (
            <div id='head-wrapper'>
                <div className='head-filler'></div>
            	<div className='head'>
            		<div className='left'>
                    	<Figure src={Logo} alt={'Cat Pack Logo'} text={''}/>
                    </div>
                    <div className='center'>
                    	<Title title='Pet Pack, LLC' />
                    </div>
                    <div className='right'>
                    	<Figure src={Logo} alt={'Cat Pack Logo'} text={''}/>
                	</div>
                </div>
            </div>
        );
    }
}

export default Head;
