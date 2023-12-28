import React from "react";
import "./intro.css";
import Logo from "./Logo.PNG";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="welcome">Welcome to my portfolio!</span>
        <span className="introText">
          My name is <span className="name">Michael</span>
        </span>
        <p className="introParagraph">
          I'm an aspiring software engineer based in the Bay Area with passion
          in healthcare <br />
          technology, gaming, and more.
          <br />
          <br />
          This website is a showcase of my journey in coding and software
          development.
        </p>
        <span className="introConclusion">Thank you for visiting.</span>
        <div className="animatedText">
          <span>E</span>
          <span>n</span>
          <span>j</span>
          <span>o</span>
          <span>y</span>
          <span>!</span>
        </div>
      </div>
      <img src={Logo} alt="Logo" className="logo" />
    </section>
  );
};

export default Intro;
