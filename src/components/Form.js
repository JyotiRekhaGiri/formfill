import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Form.css';  // Import the new CSS file

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_247os7b",
        "template_3isnlqo",
        form.current,
        "10YAX5WvryQbyjYFf"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="styled-contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <img src={require('./images/Logo.png')} alt="logo"/>
        <label>First Name</label>
        <input type="text" name="user_name" />
        <label>Last Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
