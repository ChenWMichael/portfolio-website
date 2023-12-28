import React from "react";
import "./works.css";
import Covid_Stamp from "./Stamps/covid stamp.png";
import LC4_Stamp from "./Stamps/lc4 stamp.png";
import Battleship_Stamp from "./Stamps/battleship stamp.png";
import Syzygy_Stamp from "./Stamps/syzygy_stamp.png";
import Handshake_Stamp from "./Stamps/handshake stamp.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        My portfolio presents a range of projects, from ambitious endeavors to
        smaller, fun experiments, each demonstrating my passion for coding and
        continuous skill development.
      </span>
      <div className="worksImgs">
        <div className="worksItem">
          <img
            src={Syzygy_Stamp}
            alt="Syzygy Search Engine"
            className="worksImg"
          />
          <h3>Syzygy Search Engine</h3>
        </div>
        <div className="worksItem">
          <img
            src={Covid_Stamp}
            alt="Data Analysis Application for COVID-19 and Property Data"
            className="worksImg"
          />
          <h3>COVID-19 Data Analysis</h3>
        </div>
        <div className="worksItem">
          <img
            src={LC4_Stamp}
            alt="LC4 Reverse Assembler and Memory Management Tool"
            className="worksImg"
          />
          <h3>LC4 Reverse Assembler</h3>
        </div>
        <div className="worksItem">
          <img src={Battleship_Stamp} alt="Battleship" className="worksImg" />
          <h3>Battleship Game</h3>
        </div>
        <div className="worksItem">
          <img
            src={Handshake_Stamp}
            alt="Classic Handshake Protocol"
            className="worksImg"
          />
          <h3>Handshake Protocol</h3>
        </div>
      </div>
    </section>
  );
};

export default Works;
