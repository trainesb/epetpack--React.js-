import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import Title from "../presentational/Title.jsx";
import Testimony from "../presentational/Testimony.jsx";
import SideNav from "../containers/SideNav.jsx";
import Footer from "../containers/Footer.jsx";

import '../../scss/reviews.scss';


class Reviews extends Component {

    render() {
        return(
        	<div id="Reviews">
        		<Head />

                <Title title={'Reviews'} />

                <SideNav />

                <div className='testimony-list'>
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                    <Testimony name={'Name'} text={'Review text.'} />
                </div>

        		<Footer />
        	</div>
        );
    }
}

export default Reviews;