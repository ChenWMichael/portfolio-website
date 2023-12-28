import React from "react";
import "./skills.css";
import Heart from "./small_heart.png";
import PM from "./project_management.png";
import Writing from "./technical_writing.png";
import DA from "./data_analysis.png";
import WD from "./web_development.png";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">About Me</span>
      <span className="skillDesc">
        Welcome! I'm an aspiring software engineer passionate about integrating
        my interests in healthcare, gaming, and technology. With a foundation in
        healthcare software solutions, I'm transitioning into the technical
        realm, aiming to innovate and impact various tech sectors. Discover my
        journey in technology through my portfolio.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={DA} alt="DataAnalysis" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Data Analysis</h2>
            <p>
              Skilled in data analysis, adept at handling extensive datasets and
              sophisticated data structures. Experience in extracting meaningful
              insights from complex data, essential in both technology and
              healthcare sectors.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={PM} alt="ProjectManagement" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Project Management</h2>
            <p>
              Demonstrated project management abilities, with a track record of
              leading teams and managing critical medical device submissions.
              Known for effective coordination, timely deliverables, and
              strategic decision-making.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WD} alt="WebDevelopment" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              Proficient in web development, including both front-end and
              back-end aspects. Developed the Syzygy Custom-Search Engine and a
              personal portfolio website, showcasing a blend of creativity and
              technical expertise.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Writing} alt="TechnicalWriting" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Technical Writing</h2>
            <p>
              Strong in technical writing, capable of clearly and concisely
              communicating complex information. Experience in regulatory
              compliance and project documentation has sharpened this skill,
              making it a valuable asset in professional communication.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Heart} alt="Heart" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Regulatory Compliance in Healthcare Technology</h2>
            <p>
              Expert in navigating the regulatory landscape of healthcare
              technology, particularly in medical device software. Knowledgeable
              about FDA and MDR regulations, applying these insights effectively
              in the healthcare tech field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
