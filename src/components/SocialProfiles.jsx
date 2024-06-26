import React from 'react';
import Linkedin from '../images/linkedin.png';
import Whatsapp from '../images/whatsapp.png';
import Gmail from '../images/gmail.png';
import Github from '../images/github.png';
const SocialProfiles = () => {
  return (
    <div className="my-social-profiles">
      <h2 className="social-profile-title">Connect with me 🔗 </h2>
      <div className="social-profile-divs">
        <div>
          {' '}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=napraveen03@gmail.com"
            target="/"
            rel="noopener noreferrer"
            aria-label="Link to Gmail Account"
          >
            {' '}
            <div className="social-profile-email">
              <img
                src={Gmail}
                alt="gmaillogo"
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
            rel="noopener noreferrer"
            aria-label="Link to Whatsapp"
          >
            {' '}
            <div className="social-profile-whatsapp">
              <img
                src={Whatsapp}
                alt="whatsapplogo"
                className="social-profile-whatsapp-logo"
              />
              <p>Whatsapp</p>
            </div>
          </a>
        </div>

        <div>
          {' '}
          <a
            href="https://www.linkedin.com/in/napraveen"
            target="/"
            rel="noopener noreferrer"
            aria-label="Link to Linkedin Account"
          >
            <div className="social-profile-linkedin">
              <img
                src={Linkedin}
                alt="linkedinlogo"
                className="social-profile-gmail-logo"
              />
              <p>Linkedin</p>
            </div>
          </a>
        </div>

        <div>
          {' '}
          <a
            href="https://github.com/napraveen"
            target="/"
            rel="noopener noreferrer"
            aria-label="Link to Github Account"
          >
            {' '}
            <div className="social-profile-github">
              <img
                src={Github}
                alt="githublogo"
                className="social-profile-github-logo"
              />
              <p>Github</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialProfiles;
