import React from "react";

const LinkIcon = ({ url, imageSrc, altText }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={imageSrc} alt={altText} className="link" />
    </a>
  );
};

export default LinkIcon;
