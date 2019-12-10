import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import Title from "../presentational/Title.jsx";
import SideNav from "../containers/SideNav.jsx";

import Product from "../containers/Product.jsx";

import Footer from "../containers/Footer.jsx";


class Shop extends Component {

    render() {
        return(
        	<div id="Shop">
        		<Head />

                <Title title={'Shop'} />
        		<SideNav />

                <div className='product-wrapper'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

        		<Footer />
        	</div>
        );
    }
}

export default Shop;