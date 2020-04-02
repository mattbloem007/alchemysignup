import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'


export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    let email = encodeURI(this.dataEmail.value)
    console.log("EMAIL: ", email)
    addToMailchimp(email, {
      'group[62892][8]': '8'
    })
    .then(data => {
      console.log(data)
    })
    .catch(() => {
    })
    this.setState({ message: 'Thank you! An email will be sent to you soon :)' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      <form id="signup-form" onSubmit={this.onSubmit} method="post">
        <input
            name="group[62892][8]"
            type="email"
            ref={c => (this.dataEmail = c)}
            id="email"
            placeholder="Email Address"
            required
        />
        <input type="submit" value="Sign Up" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
