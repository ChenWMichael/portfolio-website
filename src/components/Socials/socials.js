import React from "react";
import LinkIcon from "../LinkIcon/linkicon";
import GitHub_Icon from "./github_icon.png";
import Instagram_Icon from "./instagram_icon.png";

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
      </div>
    </section>
  );
};

export default Socials;
