import React, {Component} from "react";

import TopNav from "../components/TopNav.jsx";
import CarouselTestimonies from "../components/CarouselTestimonies.jsx";
import SplitContent from "../components/SplitContent.jsx";
import Footer from "../components/Footer.jsx";


class Login extends Component {

    render() {
        return(
        	<div id="Login">
        		<TopNav />
        		<CarouselTestimonies />
        		<SplitContent />
        		<Footer />
        	</div>
        );
    }
}

export default Login;