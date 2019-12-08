import React, {Component, Fragment} from "react";

import Head from "../components/Head.jsx";
import CarouselTestimonies from "../components/CarouselTestimonies.jsx";
import Footer from "../components/Footer.jsx";


class Shop extends Component {

    render() {
        return(
        	<Fragment>
        		<Head />
        		<CarouselTestimonies />
        		<Footer />
        	</Fragment>
        );
    }
}

export default Shop;