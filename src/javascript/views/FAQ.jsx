import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import Title from "../presentational/Title.jsx";
import SideNav from "../containers/SideNav.jsx";
import Footer from "../containers/Footer.jsx";


class FAQ extends Component {

    render() {
        return(
        	<div id="FAQ">
        		<Head />

                <Title title={'FAQ'} />

                <SideNav />

                <div className='section'>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis turpis eget quam luctus consectetur non vitae magna. Aenean fermentum nulla vitae justo sagittis mattis. Vivamus sollicitudin libero quis enim faucibus vehicula. Maecenas ullamcorper odio a tincidunt porta. Nulla quis est sollicitudin, efficitur nisi ut, facilisis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut odio mattis, posuere justo nec, cursus quam. Pellentesque ex lorem, condimentum sed urna in, facilisis molestie leo. Donec mollis felis dui, ut laoreet eros auctor sed. Donec eu diam efficitur, fringilla elit vehicula, sagittis enim. Aliquam pulvinar in augue vitae egestas.</h3>

                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis turpis eget quam luctus consectetur non vitae magna. Aenean fermentum nulla vitae justo sagittis mattis. Vivamus sollicitudin libero quis enim faucibus vehicula. Maecenas ullamcorper odio a tincidunt porta. Nulla quis est sollicitudin, efficitur nisi ut, facilisis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut odio mattis, posuere justo nec, cursus quam. Pellentesque ex lorem, condimentum sed urna in, facilisis molestie leo. Donec mollis felis dui, ut laoreet eros auctor sed. Donec eu diam efficitur, fringilla elit vehicula, sagittis enim. Aliquam pulvinar in augue vitae egestas.</p>
                    <p>Mauris posuere mattis felis vel finibus. Phasellus fringilla velit eu lacus pharetra interdum. Suspendisse congue ornare porttitor. Nulla quam lacus, sodales sed tempor et, sollicitudin id nunc. Nunc tristique mi id ipsum placerat gravida. In dapibus in ex a pulvinar. Cras vitae facilisis leo. Morbi aliquet dui vel odio ornare, vitae malesuada mauris ullamcorper. Integer condimentum, enim vitae viverra sodales, leo quam porta diam, a ullamcorper ante leo at nulla. Nulla ut sapien eros. Mauris eu vestibulum dolor, eu hendrerit justo.</p>
                    <p>Pellentesque ac arcu sit amet elit tristique semper eget in diam. Proin sed pellentesque metus. Suspendisse porta viverra enim, nec iaculis odio tincidunt nec. Curabitur hendrerit aliquet lorem, et placerat velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec consectetur dapibus nisi, quis sagittis justo. Nullam dictum placerat nisl vitae volutpat. Donec tincidunt erat non massa tristique, sit amet molestie ligula sollicitudin. Vestibulum eu metus sit amet neque vestibulum pulvinar. Vivamus euismod at mi vulputate iaculis. Aenean eget porttitor felis, ac aliquet purus. Donec efficitur consequat accumsan. Vestibulum mattis sem elit, sed aliquet arcu mollis a.</p>
                </div>


        		<Footer />
        	</div>
        );
    }
}

export default FAQ;