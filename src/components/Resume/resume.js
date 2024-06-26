import React from "react";
import "./resume.css";
import { useState } from "react";
import { useEffect } from "react";

const Resume = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="resume">
      <h1 className="resumeTitle">My Resume</h1>
      <a
        // href={`${process.env.PUBLIC_URL}/Michael_Chen_resume_portfolio_2024.pdf`}
        href={`${process.env.PUBLIC_URL}/Michael_Chen_Portfolio_CV.pdf`}
        download="My_Resume.pdf"
        className="downloadLink"
      >
        Download My Resume
      </a>
      {windowWidth >= 840 && (
        <div className="resumeDisplay">
          <iframe
            // src={`${process.env.PUBLIC_URL}/Michael_Chen_resume_portfolio_2024.pdf`}
            src={`${process.env.PUBLIC_URL}/Michael_Chen_Portfolio_CV.pdf`}
            title="My Resume"
            width="50%"
            height="600px"
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Resume;
