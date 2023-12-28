import React from "react";
import "./works.css";
import Covid_Stamp from "./Stamps/covid stamp.png";
import LC4_Stamp from "./Stamps/lc4 stamp.png";
import Battleship_Stamp from "./Stamps/battleship stamp.png";
import Syzygy_Stamp from "./Stamps/syzygy_stamp.png";
import Portfolio_Stamp from "../Intro/Logo.PNG";
import { useState } from "react";
import ProjectPopup from "../ProjectPopup/projectpopup";
import syzygy_img1 from "./Syzygy Images/ai ethics screenshot.PNG";
import syzygy_img2 from "./Syzygy Images/sam altman screenshot.PNG";
import syzygy_img3 from "./Syzygy Images/view cached page.PNG";

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const projects = [
    {
      name: "Syzygy Search Engine",
      imgSrc: Syzygy_Stamp,
      description: "Description of Syzygy Search Engine",
      images: [Syzygy_Stamp, syzygy_img1, syzygy_img2, syzygy_img3],
    },
    { name: "Portfolio Website", imgSrc: Portfolio_Stamp, description: "TBD" },
    { name: "COVID-19 Data Analysis", imgSrc: Covid_Stamp, description: "TBD" },
    { name: "LC4 Reverse Assembler", imgSrc: LC4_Stamp, description: "TBD" },
    {
      name: "Battleship",
      imgSrc: Battleship_Stamp,
      description: "TBD",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setPopupVisibility(true);
  };

  const closePopup = () => {
    setPopupVisibility(false);
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        My portfolio presents a range of projects, from ambitious endeavors to
        smaller, fun experiments, each demonstrating my passion for coding and
        continuous skill development.
      </span>
      <div className="worksImgs">
        {projects.map((project, index) => (
          <div
            key={index}
            className="worksItem"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.imgSrc} alt={project.name} className="worksImg" />
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
      {isPopupVisible && (
        <ProjectPopup project={selectedProject} onClose={closePopup} />
      )}
    </section>
  );
};

export default Works;
