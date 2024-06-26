import React from 'react';
import Attendance from '../images/attendance.png';
import Expressjs from '../images/express.jpeg';
import Reactjs from '../images/react.png';
import Mongodb from '../images/mongodb.png';
const Projects = () => {
  return (
    <div className="my-projects">
      <h2 className="project-title">Project I'm working on 🧑‍💻</h2>
      <div className="project-divs">
        <div>
          {' '}
          <a
            href="https://github.com/napraveen/Attendance-Management-System"
            target="/"
            rel="noopener noreferrer"
            aria-label="Link to Attendance Management System GitHub Repository"
          >
            {' '}
            <div className="project-attendance">
              <h3 className="project-attendance-title">
                Attendance Management System
              </h3>
              <div className="project-attendance-ts">
                <img
                  src={Reactjs}
                  alt="reactjslogo"
                  className="tech-stack-react"
                />
                <img
                  src={Expressjs}
                  alt="expressjslogo"
                  className="tech-stack-express"
                />
                <img
                  src={Mongodb}
                  alt="mongodblogo"
                  className="tech-stack-mongo"
                />
              </div>
              <div className="project-attendance-image-border">
                {' '}
                <img
                  src={Attendance}
                  alt="projectimage"
                  className="project-attendance-image"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
