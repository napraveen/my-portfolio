import React from 'react';

import Projects from './Projects';
import Achievement from './Achievement';
import Skills from './Skills';
import Resume from './Resume';
import SocialProfiles from './SocialProfiles';
const Right = () => {
  return (
    <div className="right">
      <Projects />
      <Achievement />
      <Skills />
      <Resume />
      <SocialProfiles />
    </div>
  );
};

export default Right;
