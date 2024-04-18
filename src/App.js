import React from 'react';
import Left from './components/Left.jsx';
import './styles/app.css';
import Expressjs from './images/express.jpeg';
import Reactjs from './images/react.png';
import Mongodb from './images/mongodb.png';
import Attendance from './images/attendance.png';
import Linkedin from './images/linkedin.png';
import Whatsapp from './images/whatsapp.png';
import Gmail from './images/gmail.png';
import Github from './images/github.png';
import Html from './images/html.png';
import Css from './images/css.png';
import Js from './images/js.png';
import Figma from './images/figma.png';
import Python from './images/python.jpeg';
import C from './images/c.png';
import Java from './images/java.jpeg';
import Django from './images/django.jpeg';
import Drive from './images/drive.png';
const App = () => {
  return (
    <div className="container">
      <Left />
      <div className="right">
        <div className="my-projects">
          <h2 className="project-title">Project I'm working on 🧑‍💻</h2>
          <div className="project-divs">
            <div>
              {' '}
              <a
                href="https://github.com/napraveen/Attendance-Management-System"
                target="/"
              >
                {' '}
                <div className="project-attendance">
                  <h3 className="project-attendance-title">
                    Attendance Management System
                  </h3>
                  <div className="project-attendance-ts">
                    <img src={Reactjs} alt="" className="tech-stack-react" />
                    <img
                      src={Expressjs}
                      alt=""
                      className="tech-stack-express"
                    />
                    <img src={Mongodb} alt="" className="tech-stack-mongo" />
                  </div>
                  <div className="project-attendance-image-border">
                    {' '}
                    <img
                      src={Attendance}
                      alt=""
                      className="project-attendance-image"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="my-achievement">
          <h2 className="achievement-title">My Achievement 🏆</h2>
          <div className="achievement-divs">
            <div className="achievement-sih">
              <h3 className="achievement-sih-title">SIH Finalist - 2023</h3>
              <h5 className="achievement-sih-name">
                Underwater ROV for Monitoring Head Race Tunnels in Hydroelectric
                Projects
              </h5>
              <p className="achievement-sih-desc">
                I made an interactive website (Django) that interacts with
                hardware and shows the result on the website{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="my-skills">
          <h2 className="skills-title">My Skills ⭐</h2>
          <div className="skills-divs">
            <img src={Html} alt="" className="skills-html" />
            <img src={Css} alt="" className="skills-css" />
            <img src={Js} alt="" className="skills-js" />
            <img src={Figma} alt="" className="skills-figma" />
            <img src={Reactjs} alt="" className="skills-react" />
            <img src={Expressjs} alt="" className="skills-express" />
            <img src={Mongodb} alt="" className="skills-mongodb" />
            <img src={Python} alt="" className="skills-python" />
            <img src={C} alt="" className="skills-c" />
            <img src={Java} alt="" className="skills-java" />
            <img src={Django} alt="" className="skills-django" />
          </div>
        </div>

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
        <div className="my-social-profiles">
          <h2 className="social-profile-title">Connect with me 🔗</h2>
          <div className="social-profile-divs">
            <div>
              {' '}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=napraveen03@gmail.com"
                target="/"
              >
                {' '}
                <div className="social-profile-email">
                  <img
                    src={Gmail}
                    alt=""
                    className="social-profile-gmail-logo"
                  />
                  <p>Gmail</p>
                </div>
              </a>
            </div>

            <div>
              {' '}
              <a
                href="https://wa.me/9345004776?text=Hello%20Praveen!%20I%20have%20looked%20through%20your%20Portfolio"
                target="/"
              >
                {' '}
                <div className="social-profile-whatsapp">
                  <img
                    src={Whatsapp}
                    alt=""
                    className="social-profile-whatsapp-logo"
                  />
                  <p>Whatsapp</p>
                </div>
              </a>
            </div>

            <div>
              {' '}
              <a href="https://www.linkedin.com/in/napraveen" target="/">
                <div className="social-profile-linkedin">
                  <img
                    src={Linkedin}
                    alt=""
                    className="social-profile-gmail-logo"
                  />
                  <p>Linkedin</p>
                </div>
              </a>
            </div>

            <div>
              {' '}
              <a href="https://github.com/napraveen" target="/">
                {' '}
                <div className="social-profile-github">
                  <img
                    src={Github}
                    alt=""
                    className="social-profile-github-logo"
                  />
                  <p>Github</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
