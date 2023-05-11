
import '../App.css';
import "./Contact.css";

import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lm077gj', 'template_nk7uhox', form.current, '6U3gDH4Iet48cGlIf')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <div
        className="leftSide">
        
      </div>
      <div className="rightSide">
        <h1> Contact Me</h1>

        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      
      <button type="submit"> Send Message</button>
    </form>


      </div>
    </div>
  );
}


export default Contact;