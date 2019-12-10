import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import SideNav from "../containers/SideNav.jsx";
import SplitContent from "../containers/SplitContent.jsx";
import Footer from "../containers/Footer.jsx";


class Home extends Component {

    render() {
        return(
        	<div id="Home">
        		<Head />

                <SideNav />
        		
                <SplitContent />
                <SplitContent />
                <SplitContent />
                <SplitContent />
                

        		<Footer />
        	</div>
        );
    }
}

export default Home;