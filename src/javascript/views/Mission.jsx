import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import Title from "../presentational/Title.jsx";
import SideNav from "../containers/SideNav.jsx";
import Footer from "../containers/Footer.jsx";


class Mission extends Component {

    render() {
        return(
        	<div id="Mission">
        		<Head />

                <Title title={'Mission'} />

                <SideNav />

        		<Footer />
        	</div>
        );
    }
}

export default Mission;