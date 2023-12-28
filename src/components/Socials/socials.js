import React from "react";
import LinkIcon from "../LinkIcon/linkicon";
import GitHub_Icon from "./github_icon.png";
import Instagram_Icon from "./instagram_icon.png";
import Linkedin_Icon from "./linkedin_icon.png";

const Socials = () => {
  return (
    <section id="socials">
      <div className="links">
        <LinkIcon
          url="https://github.com/ChenWMichael"
          imageSrc={GitHub_Icon}
          altText="GitHub"
        />
        <LinkIcon
          url="https://instagram.com/mycoalchen"
          imageSrc={Instagram_Icon}
          altText="Instagram"
        />
        <LinkIcon
          url="https://www.linkedin.com/in/chenwmichael/"
          imageSrc={Linkedin_Icon}
          altText="Linkedin"
        />
      </div>
    </section>
  );
};

export default Socials;
