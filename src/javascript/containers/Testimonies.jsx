import React, { Component } from 'react';

import Testimony from '../presentational/Testimony.jsx';

import '../../scss/testimonies.scss';

class Testimonies extends Component {

    render() {
        return (
            <div className='testimonies'>
                <Testimony name={'Name'} text={'Review text.'} />
                <Testimony name={'Name'} text={'Review text.'} />
                <Testimony name={'Name'} text={'Review text.'} />
                <Testimony name={'Name'} text={'Review text.'} />
            </div>
        );
    }
}

export default Testimonies;
