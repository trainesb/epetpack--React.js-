import React, {Component} from "react";

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
        console.log('Submitted' + this.state,value);
        event.preventDefault();
    }

    render() {
        return(
            <div id='contact-form'>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>First Name:</label>
                        <input type="text" value={this.state.firstName} onChange={this.handleChange} />
                    </p>
                    <p>
                        <label>Last Name:</label>
                        <input type="text" value={this.state.lastName} onChange={this.handleChange} />
                    </p>
                    <p>
                        <label>Email:</label>
                        <input type="email" value={this.state.email} onChange={this.handleChange} />
                    </p>
                    <p>
                        <label>Subject:</label>
                        <input type="text" value={this.state.subject} onChange={this.handleChange} />
                    </p>
                    <p>
                        <label>Message:</label>
                        <textarea type="text" value={this.state.message} onChange={this.handleChange} />
                    </p>

                    <p><input type="submit" value="submit" /></p>
                </form>
            </div>
        );
    }
}

export default ContactForm;