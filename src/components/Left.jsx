import React from 'react';
import '../styles/app.css';
import image1 from '../images/image.png';
const Left = () => {
  return (
    <div className="left">
      <img src={image1} alt="" className="my-image" />
      <h1 className="my-name">Praveen N</h1>
      <h5 className="my-title">ASPIRING FULL STACK DEVELOPER</h5>
      <p className="my-description">
        Third-year Undergraduate ECE student with a strong knowledge in web
        development including tech stacks like{' '}
        <span
          style={{
            backgroundColor: 'black',
            borderRadius: '10px',
            color: 'white',
            padding: '3px 10px 3px 10px',
            fontSize: '10px',
          }}
        >
          REACT
        </span>{' '}
        <span
          style={{
            backgroundColor: 'black',
            borderRadius: '10px',
            color: 'white',
            padding: '3px 10px 3px 10px',
            fontSize: '10px',
          }}
        >
          EXPRESS
        </span>{' '}
        <span
          style={{
            backgroundColor: 'black',
            borderRadius: '10px',
            color: 'white',
            padding: '3px 10px 3px 10px',
            fontSize: '10px',
          }}
        >
          MONGODB
        </span>{' '}
        <span
          style={{
            backgroundColor: 'black',
            borderRadius: '10px',
            color: 'white',
            padding: '3px 10px 3px 10px',
            fontSize: '10px',
          }}
        >
          {' '}
          Django
        </span>
      </p>
      <a href="https://www.linkedin.com/in/napraveen" target="blank">
        <div className="linkedin-button">Linkedin</div>
      </a>
      <a href="https://github.com/napraveen" target="blank">
        <div className="github-button">GitHub</div>
      </a>
    </div>
  );
};

export default Left;
