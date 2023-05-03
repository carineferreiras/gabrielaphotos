import React from 'react';
import '../App.css';
import "./Contact.css";
import Logo from "../components/images/contactme7.png";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide">
        <img id="logoimg" src={Logo} alt="logo"/>
      </div>
      <div className="rightSide">
        <h1> Contact Me</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;