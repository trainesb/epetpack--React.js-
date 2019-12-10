import React, { Component } from 'react';

import Image from '../presentational/Image.jsx';
import Title from '../presentational/Title.jsx';

import Logo from '../../images/CatPack_Logo_Print.png';

import '../../scss/head.scss';


class Head extends Component {

    render() {
        return (
        	<div className='head'>
        		<div className='left'>
                	<Image path={Logo} alt={'Cat Pack Logo'} />
                </div>
                <div className='center'>
                	<Title title='Pet Pack, LLC' />
                </div>
                <div className='right'>
                	<Image path={Logo} alt={'Cat Pack Logo'} />
            	</div>
            </div>
        );
    }
}

export default Head;
