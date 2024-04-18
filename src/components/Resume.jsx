import React from 'react';
import Drive from '../images/drive.png';
const Resume = () => {
  return (
    <div className="my-resume">
      <h2 className="resume-title">My Resume 📜</h2>
      <div className="resume-divs">
        <a
          href="https://drive.google.com/file/d/1HRA0JCN6bZQmMEMxIQ2gzjt8v5N2y7jx/view?usp=drive_link"
          target="/"
        >
          {' '}
          <div className="resume-div">
            <img src={Drive} alt="" className="resume-drive-logo" />
            <p>Resume</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Resume;
