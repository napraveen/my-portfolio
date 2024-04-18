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
        <img src={Html} alt="htmllogo" className="skills-html" />
        <img src={Css} alt="csslogo" className="skills-css" />
        <img src={Js} alt="jslogo" className="skills-js" />
        <img src={Figma} alt="figmalogo" className="skills-figma" />
        <img src={Reactjs} alt="reactjslogo" className="skills-react" />
        <img src={Expressjs} alt="expressjslogo" className="skills-express" />
        <img src={Mongodb} alt="mongodblogo" className="skills-mongodb" />
        <img src={Python} alt="pythonlogo" className="skills-python" />
        <img src={C} alt="clogo" className="skills-c" />
        <img src={Java} alt="javalogo" className="skills-java" />
        <img src={Django} alt="djangologo" className="skills-django" />
      </div>
    </div>
  );
};

export default Skills;
