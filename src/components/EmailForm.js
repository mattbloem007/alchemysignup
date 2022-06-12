import React, { Component } from 'react';
import emailjs from 'emailjs-com';


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
    let name = encodeURI(this.dataName.value)
    console.log("EMAIL: ", email)

    var template_params = {
               "reply_to": email,
               "from_name": "Matthew Gabriel",
               "to_name": name,
               "message": "Thank you for joining the Nutritional Technology call. You are booked and you will receive another email before the call with the zoom link and instructions to offer a donation"
            }

    var service_id = "service_ifs4l2e";
    var template_id = "template_hqpw4qn";
    var user_id = "user_E7hnIvNfEqvZm2avmHiqG";
    try {
      emailjs.send(service_id, template_id, template_params, user_id)
    }
    catch(e) {
      console.log("ERROR", e)
    }


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
          name="name"
          type="text"
          ref={c => (this.dataName = c)}
          id="name"
          placeholder="Name"
          required
      />
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
