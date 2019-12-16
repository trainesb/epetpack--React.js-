import React, {Component} from "react";

import TopNav from "../components/TopNav.jsx";
import LoginForm from "../components/LoginForm.jsx";
import Footer from "../components/Footer.jsx";

class Login extends Component {

    render() {
        return(
        	<div id="Login">
        		<TopNav />
        		<LoginForm />
        		<Footer />
        	</div>
        );
    }
}

export default Login;