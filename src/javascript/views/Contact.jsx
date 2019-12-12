import React, {Component} from "react";

import TopNav from "../components/TopNav.jsx";
import CarouselTestimonies from "../components/CarouselTestimonies.jsx";
import SplitContent from "../components/SplitContent.jsx";
import Footer from "../components/Footer.jsx";


class Contact extends Component {

    render() {
        return(
        	<div id="Contact">
        		<TopNav />
        		<CarouselTestimonies />
        		<SplitContent />
        		<Footer />
        	</div>
        );
    }
}

export default Contact;