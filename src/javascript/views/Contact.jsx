import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import Title from "../presentational/Title.jsx";
import SideNav from "../containers/SideNav.jsx";
import Footer from "../containers/Footer.jsx";


class Contact extends Component {

    render() {
        return(
        	<div id="Contact">
        		<Head />

                <Title title={'Contact'} />

                <SideNav />

        		<Footer />
        	</div>
        );
    }
}

export default Contact;