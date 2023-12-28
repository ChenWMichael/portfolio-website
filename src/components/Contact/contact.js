import React, { useRef } from "react";
import "./contact.css";
import Socials from "../Socials/socials";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7h2gxj4",
        "template_kushawo",
        form.current,
        "wRbfl1lpd9IkxsdTL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="contactPage">
      <div id="contact"></div>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="contactName"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="text"
          className="organization"
          placeholder="Your Organization"
          name="from_organization"
        />
        <input
          type="text"
          className="email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          className="msg"
          name="message"
          rows="6"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
        <Socials />
      </form>
      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <p>Message Submitted Successfully</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
