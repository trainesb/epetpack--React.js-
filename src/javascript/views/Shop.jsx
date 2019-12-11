import React, {Component, Fragment} from "react";

import TopNav from "../components/TopNav.jsx";
import CarouselTestimonies from "../components/CarouselTestimonies.jsx";
import Footer from "../components/Footer.jsx";


class Shop extends Component {

    render() {
        return(
        	<Fragment>
        		<TopNav />
        		<CarouselTestimonies />
        		<Footer />
        	</Fragment>
        );
    }
}

export default Shop;