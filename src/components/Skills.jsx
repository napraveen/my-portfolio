import React from 'react';
import Html from '../images/html.png';
import Css from '../images/css.png';
import Js from '../images/js.png';
import Figma from '../images/figma.png';
import Python from '../images/python.jpeg';
import C from '../images/c.png';
import Java from '../images/java.jpeg';
import Django from '../images/django.jpeg';
import Expressjs from '../images/express.jpeg';
import Reactjs from '../images/react.png';
import Mongodb from '../images/mongodb.png';
const Skills = () => {
  return (
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
  );
};

export default Skills;
