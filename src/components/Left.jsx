import React from 'react';
import '../styles/app.css';
import image1 from '../images/image.png';

const Left = () => {
  return (
    <div className="left">
      <img src={image1} alt="myphoto" className="my-image" />
      <h1 className="my-name">Praveen N</h1>
      <h5 className="my-title">ASPIRING FULL STACK DEVELOPER</h5>
      <p className="my-description">
        Third-year Undergraduate ECE student with a strong knowledge in web
        development including tech stacks like{' '}
        <span className="tech-span">REACT</span>{' '}
        <span className="tech-span">EXPRESS</span>{' '}
        <span className="tech-span">MONGODB</span>{' '}
        <span className="tech-span"> Django</span>
      </p>
      <a
        href="https://www.linkedin.com/in/napraveen"
        target="blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <div className="linkedin-button">Linkedin</div>
      </a>
      <a
        href="https://github.com/napraveen"
        target="blank"
        rel="noopener noreferrer"
        aria-label="Github Profile"
      >
        <div className="github-button">GitHub</div>
      </a>
    </div>
  );
};

export default Left;
