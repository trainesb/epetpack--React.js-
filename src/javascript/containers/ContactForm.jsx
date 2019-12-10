import React, {Component} from "react";

import Input from '../presentational/Input.jsx';

import "../../scss/contact-form.scss";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('Submitted' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <div id='contact-form'>
                <form onSubmit={this.handleSubmit}>

                    <p>First Name:</p>
                    <Input type={'text'} value={this.state.firstName} />
                    
                    <p>Last Name:</p>
                    <Input type={'text'} value={this.state.lastName} />
                    
                    <p>Email:</p>
                    <Input type={'email'} value={this.state.email} />
                    
                    <p>Subject:</p>
                    <Input type={'text'} value={this.state.subject} />
                    
                    <p>Message:</p>
                    <Input type={'textarea'} value={this.state.message} />

                    <p><input type="submit" value="submit" /></p>
                </form>
            </div>
        );
    }
}

export default ContactForm;