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
import gsq_img1 from "./GSQ Images/home.PNG";
import gsq_img2 from "./GSQ Images/home_join.PNG";
import gsq_img3 from "./GSQ Images/home_create.PNG";
import gsq_img4 from "./GSQ Images/session.PNG";

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
      url: null,
    },
    {
      name: "Portfolio Website",
      imgSrc: Portfolio_Stamp,
      description:
        "Over a productive span of two days, I developed my first React-based portfolio " +
        "website, a testament to my growing skills in modern web technologies. This interactive " +
        "platform showcases my projects through clickable images, each leading to a detailed " +
        "popup complete with image carousels and comprehensive descriptions. I integrated " +
        "Email.js for direct communication and added social media links to offer a complete " +
        "and engaging user experience. As an initial foray into React, this website not only " +
        "demonstrates my technical capabilities but also my enthusiasm for exploring and " +
        "mastering new technologies in the realm of web development.",
      images: [
        Portfolio_Stamp,
        portfolio_img1,
        portfolio_img2,
        portfolio_img3,
        portfolio_img4,
        portfolio_img5,
      ],
      url: null,
    },
    {
      name: "Group Sports Queue",
      imgSrc: gsq_img1,
      description: `
      Group Sports Queue is a targeted web application, primarily designed for mobile 
      browsers, developed to efficiently manage game queues in group sports environments. 
      Conceived and built within three days, it is currently in its testing phase. The 
      application skillfully combines a Node.js and Express.js backend with RESTful APIs 
      for dynamic content and efficient data handling. The frontend, leveraging React.js 
      and asynchronous JavaScript, enhances user engagement with a draggable/droppable 
      queue feature, allowing for intuitive reordering of members. Hosted on Fly.io with 
      MongoDB Atlas Cloud supporting the backend, Group Sports Queue excels in delivering 
      real-time updates, keeping all participants synchronized. This application not only 
      simplifies the organization of sports activities but also serves as an exemplary use 
      of modern web development practices to address specific, practical needs in community 
      sports settings.
      `,
      images: [gsq_img1, gsq_img2, gsq_img3, gsq_img4],
      url: "https://group-sports-queue.fly.dev/",
    },
    {
      name: "COVID-19 Data Analysis",
      imgSrc: Covid_Stamp,
      description:
        "In this project, I developed a Java-based data analysis application that focuses " +
        "on parsing and analyzing diverse datasets, including COVID-19 statistics, property " +
        "values, and population data. The core of the project involved intricate parsing of " +
        "CSV and JSON files to transform them into meaningful insights. I employed advanced " +
        "data structures and integrated key design patterns like Singleton and Strategy to " +
        "ensure a robust and scalable application architecture. Emphasizing the practical " +
        "application of data analysis, the application features calculations of total " +
        "vaccinations per capita from the COVID-19 dataset and average market values of " +
        "properties. The project was structured using N-tier architecture to enhance " +
        "maintainability and scalability, facilitating efficient data management and processing. " +
        "Furthermore, I implemented comprehensive error handling mechanisms to manage data " +
        "inconsistencies, ensuring the reliability and integrity of the outputs. A key focus " +
        "was placed on efficient data management and memory usage, including techniques like " +
        "memoization, which are critical for handling large datasets effectively.",
      images: [Covid_Stamp],
      url: null,
    },
    {
      name: "LC4 Reverse Assembler",
      imgSrc: LC4_Stamp,
      description:
        "In the LC4 Reverse Assembler and Memory Management Tool project, I developed a " +
        "C program that successfully reverse assembles .obj files from PennSim into LC4 " +
        "assembly language. The project involved complex parsing of binary .obj files and " +
        "meticulous reconstruction of assembly code. I efficiently managed a dynamic linked " +
        "list in C, mimicking the LC4's program and data memories, closely replicating PennSim’s " +
        "loader functionality. Key to this project was the use of advanced bitwise operations " +
        "for interpreting binary instructions, translating them into readable LC4 assembly " +
        "language, thus deepening the understanding of machine code. Rigorous error handling, " +
        "combined with Valgrind for memory leak detection, ensured tool reliability and stability " +
        "under various conditions. Additionally, I utilized GDB for debugging, enhancing code " +
        "reliability and performance. The focus on effective memory allocation and deallocation " +
        "was pivotal in overcoming memory management challenges, ensuring the tool's integrity " +
        "and performance.",
      images: [LC4_Stamp],
      url: null,
    },
    {
      name: "Battleship",
      imgSrc: Battleship_Stamp,
      description:
        "In the 'Battleship - A Java-Based Game Implementation' project, developed as part " +
        "of my software development course, I recreated the classic game of Battleship with a " +
        "twist of single-player against the computer. Over the course of this project, I honed " +
        "my skills in Java, focusing on intricate data parsing from .obj files to lay out the " +
        "game environment, and implementing efficient data structures like dynamic linked lists " +
        "for managing game data. The game's core included advanced concepts such as bitwise " +
        "operations for interpreting game moves, robust error handling, and effective memory " +
        "management using tools like Valgrind to ensure stability. I designed an interactive " +
        "console-based interface that allows strategic gameplay, challenging the player against " +
        "a strategically programmed AI opponent. This endeavor not only deepened my understanding " +
        "of object-oriented programming and software testing but also emphasized the importance " +
        "of user-centric design in software development.",
      images: [Battleship_Stamp],
      url: null,
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
        continuous skill development. <br />
        Click each project for more details.
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
