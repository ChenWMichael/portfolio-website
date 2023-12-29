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
import portfolio_img1 from "./Portfolio Images/img_about.PNG";
import portfolio_img2 from "./Portfolio Images/img_portfolio.PNG";
import portfolio_img3 from "./Portfolio Images/img_resume.PNG";
import portfolio_img4 from "./Portfolio Images/img_contact.PNG";
import portfolio_img5 from "./Portfolio Images/img_mobile.PNG";

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const projects = [
    {
      name: "Syzygy Search Engine",
      imgSrc: Syzygy_Stamp,
      description:
        "The Syzygy Search Engine, featured in my portfolio," +
        " is an advanced web crawling and indexing system developed" +
        " on AWS. In just one week of operation, it processed over 1" +
        " million URLs, storing more than 320,000 pages and discarding" +
        " over 650,000 through filtering. Its index boasts over 2" +
        " million tokens, showcasing its comprehensive data coverage." +
        " The engine demonstrates impressive capabilities, crawling" +
        " approximately 30,000 pages and indexing around 6,000 pages" +
        " each hour. It features an enhanced KVS and Flame operations" +
        " for efficient handling of large data tables. The engine's" +
        " design ensures consistent data integrity, thanks to" +
        " idempotent operations and persistent queues that safeguard" +
        " against data loss during crashes. On the frontend, it offers" +
        " user-friendly features such as Lazy Loading, Infinite" +
        " Scrolling, Text Snippets, Highlighting, and direct access" +
        "to cached and nested pages from search results. These" +
        " functionalities, combined with a Light/Dark Mode Toggle for" +
        " UI customization, make the Syzygy Search Engine a practical" +
        " tool for data retrieval and web navigation.",
      images: [Syzygy_Stamp, syzygy_img1, syzygy_img2, syzygy_img3],
    },
    {
      name: "Portfolio Website",
      imgSrc: Portfolio_Stamp,
      description: "TBD",
      images: [
        Portfolio_Stamp,
        portfolio_img1,
        portfolio_img2,
        portfolio_img3,
        portfolio_img4,
        portfolio_img5,
      ],
    },
    {
      name: "COVID-19 Data Analysis",
      imgSrc: Covid_Stamp,
      description: "TBD",
      images: [Covid_Stamp],
    },
    {
      name: "LC4 Reverse Assembler",
      imgSrc: LC4_Stamp,
      description: "TBD",
      images: [LC4_Stamp],
    },
    {
      name: "Battleship",
      imgSrc: Battleship_Stamp,
      description: "TBD",
      images: [Battleship_Stamp],
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
