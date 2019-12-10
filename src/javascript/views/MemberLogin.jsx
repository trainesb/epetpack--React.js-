import React, {Component} from "react";

import Head from "../containers/Head.jsx";
import Title from "../presentational/Title.jsx";
import SideNav from "../containers/SideNav.jsx";
import Login from "../containers/Login.jsx";
import Footer from "../containers/Footer.jsx";


class MemberLogin extends Component {

    render() {
        return(
        	<div id="Login">
        		<Head />

                <Title title={'Login'} />

                <SideNav />

                <Login />

        		<Footer />
        	</div>
        );
    }
}

export default MemberLogin;