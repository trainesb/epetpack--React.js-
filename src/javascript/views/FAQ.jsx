import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import Title from "../presentational/Title.jsx";
import SideNav from "../containers/SideNav.jsx";
import Footer from "../containers/Footer.jsx";


class FAQ extends Component {

    render() {
        return(
        	<div id="FAQ">
        		<Head />

                <Title title={'FAQ'} />

                <SideNav />

        		<Footer />
        	</div>
        );
    }
}

export default FAQ;