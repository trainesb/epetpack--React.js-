import React, {Component, Fragment} from "react";

import Head from "./components/Head.jsx";
import CarouselTestimonies from "./components/CarouselTestimonies.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";


class App extends Component {

    render() {
        return(
        	<Fragment>
        		<Head />
        		<CarouselTestimonies />
        		<Body />
        		<Footer />
        	</Fragment>
        );
    }
}

export default App;