import React, {Component} from "react";

import Link from '../presentational/Link.jsx';

import "../../scss/member-login.scss";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            setCookie: false,
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    logFields() {
        const { setCookie, userName, password } = this.state;
        console.log('User: ' + userName + '\nPass: ' + password + '\nsetCookie: ' + setCookie);
    }

    handleFormChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        }, () => { this.logFields() });
    }

    handleSubmit(event) {
        console.log('Submitted');
        console.log('User: ' + this.state.userName + '\nPass: ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return(
            <form id='member-login-form' onSubmit={this.handleSubmit}>

                <label>
                    Username:
                    <input type="text" name="userName" onChange={this.handleFormChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input className='password' type='password' name='password' onChange={this.handleFormChange} />
                </label>
                <br />
                <label>
                    Stay Logged In: 
                    <input type="checkbox" name="setCookie" checked={this.state.setCookie} onChange={this.handleFormChange} />
                </label>
                <br />
                <input type="submit" value="Login" name="login" />
                <br />
                <Link path='/register' text='Register' />
            </form>
        );
    }
}

export default Login;