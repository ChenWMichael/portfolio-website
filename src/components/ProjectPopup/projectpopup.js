import React from "react";
import "./projectpopup.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const ProjectPopup = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const popupContentRef = useRef();

  const handleRightArrowClick = (e) => {
    e.stopPropagation();
    if (project.images && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleLeftArrowClick = (e) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        popupContentRef.current &&
        !popupContentRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    // Add event listener when the component is mounted
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="popupOverlay" onClick={onClose}>
      <div
        className="popupContent"
        ref={popupContentRef}
        onClick={(e) => e.stopPropagation()}
      >
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
          <h3>{project.name}</h3>
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
          <p>{project.description}</p>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
