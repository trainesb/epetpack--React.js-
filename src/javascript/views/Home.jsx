import React, {Component} from "react";

import Head from "../components/Head.jsx";
import CarouselTestimonies from "../components/CarouselTestimonies.jsx";
import Body from "../components/Body.jsx";
import Footer from "../components/Footer.jsx";


class Home extends Component {

    render() {
        return(
        	<div id="Home">
        		<Head />
        		<CarouselTestimonies />
        		<Body />
        		<Footer />
        	</div>
        );
    }
}

export default Home;