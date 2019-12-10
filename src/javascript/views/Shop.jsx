import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import Title from "../presentational/Title.jsx";
import SideNav from "../containers/SideNav.jsx";
import Footer from "../containers/Footer.jsx";


class Shop extends Component {

    render() {
        return(
        	<div id="Shop">
        		<Head />

                <Title title={'Shop'} />
        		<SideNav />

        		<Footer />
        	</div>
        );
    }
}

export default Shop;