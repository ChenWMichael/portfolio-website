import React from "react";
import "./projectpopup.css";
import { useState } from "react";

const ProjectPopup = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleRightArrowClick = () => {
    if (project.images && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleLeftArrowClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <button className="closeButton" onClick={onClose}>
          ×
        </button>
        {currentImageIndex > 0 && (
          <button
            className="navButton leftButton"
            onClick={handleLeftArrowClick}
          >
            &lt;
          </button>
        )}

        <div className="popupTop">
          {project.images && project.images.length > 0 && (
            <img src={project.images[currentImageIndex]} alt={project.name} />
          )}
        </div>

        {currentImageIndex < project.images.length - 1 && (
          <button
            className="navButton rightButton"
            onClick={handleRightArrowClick}
          >
            &gt;
          </button>
        )}
        <div className="popupBottom">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
