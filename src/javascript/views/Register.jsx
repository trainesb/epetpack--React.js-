import React, {Component} from "react";

import Input from "../presentational/Input.jsx";

import Head from "../containers/Head.jsx";
import Title from "../presentational/Title.jsx";
import SideNav from "../containers/SideNav.jsx";
import Footer from "../containers/Footer.jsx";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: '',
            passwordCheck: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('Submitted' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <div id='Register'>
                <Head />

                <Title title={'Register'} />

                <SideNav />

                <form id='register-form' onSubmit={this.handleSubmit}>
                    <p>First Name:</p>
                    <Input type={'text'} value={this.state.firstName} name={'firstName'} />

                    <p>Last Name:</p>
                    <Input type={'text'} value={this.state.lastName} name={'lastName'} />

                    <p>Email:</p>
                    <Input type={'email'} value={this.state.email} name={'email'} />

                    <p>Username:</p>
                    <Input type={'text'} value={this.state.userName} name={'userName'} />
                    
                    <p>Password:</p>
                    <Input type={'password'} value={this.state.password} name={'password'} />

                    <p>Re-Enter Password:</p>
                    <Input type={'password'} value={this.state.passwordCheck} name={'passwordCheck'} />

                    <p><Input type={"submit"} value={"Submit"} name={"submit"} /></p>
                </form>

                <Footer />
            </div>
        );
    }
}

export default Register;