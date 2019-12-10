import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import Title from "../presentational/Title.jsx";
import SideNav from "../containers/SideNav.jsx";
import Footer from "../containers/Footer.jsx";


class PackMembers extends Component {

    render() {
        return(
        	<div id="PackMembers">
        		<Head />

                <Title title={'Pack Members'} />

                <SideNav />

        		<Footer />
        	</div>
        );
    }
}

export default PackMembers;