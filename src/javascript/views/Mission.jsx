import React, {Component} from "react";

import TopNav from "../components/TopNav.jsx";
import SplitContent from "../components/SplitContent.jsx";
import Footer from "../components/Footer.jsx";


class Mission extends Component {

    render() {
        return(
        	<div id="Mission">
        		<TopNav />
        		<SplitContent />
        		<Footer />
        	</div>
        );
    }
}

export default Mission;