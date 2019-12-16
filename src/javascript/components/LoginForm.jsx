import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import SideNav from "./SideNav.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import $ from 'jquery';

class LoginForm extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: '',
			redirectToReferrer: false
		};

		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	login() {
		$.ajax({
			url: 'post/Login.php',
			data: {username: this.state.username, password: this.state.password},
			method: 'POST',
			success: function(data) {
				console.log('Success');
				console.log(data);
			},
			error: function(error) {
				console.log('Error');
				console.log(error);
			}
		})
	}

	handleChange(e) {
		this.setState({[e.target.name]:e.target.value});
	}

	handleClick(e) {
		e.preventDefault();
		console.log('Login Clicked');
		this.login();
	}

	render() {
		return (
			<Container>
				<style type="text/css">
                {`
                    #Login {
                    	text-align: center;
                    }
                `}
                </style>
				<Row>
					<Col lg={2}>
						<SideNav />
					</Col>
					<Col>
						<h2>Login</h2>
						<form id='Login'>
							<label>Username</label>
							<input type='text' name='username' placeholder='Username' onChange={this.handleChange} />
							<br />
							<label>Password</label>
							<input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
							<br />
							<input type='submit' className='submit-btn' value='Login' onClick={this.handleClick} />
							<br />
							<a href='/register'>Register</a>
						</form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default LoginForm;