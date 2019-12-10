import React, {Component} from "react";

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
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleSubmit(event) {
        console.log('Submitted' + this.state.value);
        event.preventDefault();
    }

    logFields() {
        const { firstName, lastName, email, userName, password, passwordCheck } = this.state;
        console.log('\nFirst: ' + firstName); 
        console.log('\nLast: ' + lastName);
        console.log('\nemail: ' + email);
        console.log('\nUser: ' + userName); 
        console.log('\nPassword: ' + password);
        console.log('\nPassword: ' + passwordCheck);
    }

    handleFormChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        }, () => { this.logFields() });
    }

    render() {
        return(
            <div id='Register'>
                <Head />

                <Title title={'Register'} />

                <SideNav />

                <form id='register-form' onSubmit={this.handleSubmit}>
                    <p>First Name:</p>
                    <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleFormChange}/>

                    <p>Last Name:</p>
                    <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleFormChange}/>

                    <p>Email:</p>
                    <input type='email' name='email' value={this.state.email} onChange={this.handleFormChange}/>

                    <p>Username:</p>
                    <input type='text' name='userName' value={this.state.userName} onChange={this.handleFormChange}/>
                    
                    <p>Password:</p>
                    <input type='password' name='password'  value={this.state.password} onChange={this.handleFormChange}/>

                    <p>Re-Enter Password:</p>
                    <input type='password' name='passwordCheck' value={this.state.passwordCheck} onChange={this.handleFormChange}/>

                    <p><input type="submit" value="Submit" name="submit" /></p>
                </form>

                <Footer />
            </div>
        );
    }
}

export default Register;