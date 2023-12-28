import React from "react";
import "./projectpopup.css";

const ProjectPopup = ({ project, onClose }) => {
  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <button className="closeButton" onClick={onClose}>
          ×
        </button>
        <button className="navButton leftButton">&lt;</button>
        <div className="popupTop">
          {/* Implement carousel here using project.images */}
          <p>Image Carousel Here</p>
        </div>
        <button className="navButton rightButton">&gt;</button>{" "}
        {/* Right arrow */}
        <div className="popupBottom">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
