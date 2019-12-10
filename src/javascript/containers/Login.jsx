import React, {Component} from "react";

import Input from '../presentational/Input.jsx';
import Link from '../presentational/Link.jsx';

import "../../scss/member-login.scss";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('Submitted' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form id='member-login-form' onSubmit={this.handleSubmit}>

                <p>Username:</p>
                <Input type={'text'} value={this.state.userName} name={'userName'}/>
                
                <p>Password:</p>
                <Input type={'password'} value={this.state.password} name={'password'}/>

                <p><Input type={"submit"} value={"Login"} name={"login"} /></p>
                <Link path={'/register'} text={'Register'} />
            </form>
        );
    }
}

export default Login;