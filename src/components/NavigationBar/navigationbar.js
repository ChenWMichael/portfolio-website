import React from "react";
import "./navigationbar.css";
import { Link } from "react-scroll";
import { ReactComponent as ContactIcon } from "./envelope.svg";
import Menu from "./menu_gold.png";
import { useState } from "react";

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const desktopMenuItems = [
    { name: "Home", sectionId: "intro" },
    { name: "About", sectionId: "skills" },
    { name: "Portfolio", sectionId: "works" },
    { name: "Resume", sectionId: "resume" },
    { name: "Socials", sectionId: "socials" },
  ];

  return (
    <nav className="navigationbar">
      <div className="yearText">2024</div>
      <div className="desktopMenu">
        {desktopMenuItems.map((item, index) => (
          <Link
            activeClass="active"
            key={index}
            to={item.sectionId}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <Link
        to="contactPage"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="contactButtonLink"
      >
        <button className="contactButton">
          <ContactIcon className="contactButtonImg" />
          Contact Me
        </button>
      </Link>

      <img
        src={Menu}
        alt="Menu"
        className="mobileMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        {desktopMenuItems.map((item, index) => (
          <Link
            activeClass="active"
            key={index}
            to={item.sectionId}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="contactPage"
          key="Contact Me"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          {"Contact Me"}
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
