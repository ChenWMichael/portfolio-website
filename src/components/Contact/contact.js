import React from "react";
import "./contact.css";
import Socials from "../Socials/socials";

const contact = () => {
  return (
    <section id="contactPage">
      <div id="contact"></div>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm">
        <input type="text" className="contactName" placeholder="Your Name" />
        <input
          type="text"
          className="organization"
          placeholder="Your Organization"
        />
        <input type="text" className="email" placeholder="Your Email" />
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
    </section>
  );
};

export default contact;
