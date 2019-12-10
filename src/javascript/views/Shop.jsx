import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import SideNav from "../containers/SideNav.jsx";
import Footer from "../containers/Footer.jsx";


class Shop extends Component {

    render() {
        return(
        	<div id="shop">
        		<Head />

        		<div className="first-content">
        			<SideNav />
        		</div>

        		<Footer />
        	</div>
        );
    }
}

export default Shop;