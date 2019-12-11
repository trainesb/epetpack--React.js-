import React, {Component} from "react";

import TopNav from "../components/TopNav.jsx";
import CarouselTestimonies from "../components/CarouselTestimonies.jsx";
import Body from "../components/Body.jsx";
import Footer from "../components/Footer.jsx";


class Home extends Component {

    render() {
        return(
        	<div id="Home">
        		<TopNav />
        		<CarouselTestimonies />
        		<Body />
        		<Footer />
        	</div>
        );
    }
}

export default Home;