import React, { Component } from 'react';

import Image from '../presentational/Image.jsx';
import Figure from '../presentational/Figure.jsx';

import Logo from '../../images/CatPack_Logo.jpg';
import '../../scss/SplitContent.scss';

class SplitContent extends Component {

    render() {
        return (
            <div className='split-content'>
                <div className='left-col'></div>
                <div className='center-col'>
                    <Figure src={Logo} alt={''} text={''} />
                </div>
                <div className='right-col'>
                    <p>Etiam id nisl in ex tempus lobortis. Vivamus imperdiet odio vel elit bibendum faucibus. Sed et augue in mauris laoreet sagittis sit amet vel nisi. Mauris augue nunc, ornare sit amet eros id, semper pellentesque ante. Donec dictum ornare placerat. Nullam sed ornare nunc, eu dapibus sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque fringilla ligula a lorem malesuada mollis. Vivamus a fermentum eros, non viverra massa. Aliquam hendrerit bibendum enim a vulputate. Sed sit amet quam pellentesque, porttitor justo ut, vestibulum ipsum. Donec at arcu nulla. Phasellus convallis magna risus, sed laoreet metus dictum vitae. </p>
                </div>
            </div>
        );
    }
}

export default SplitContent;
