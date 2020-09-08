import React from 'react';

import resumePDF from '../../files/MichaelMaryanoff_Resume.pdf';

const RightMenu = () => {
  return (
    <div className="right menu">
      <a href={resumePDF} download="MichaelMaryanoff_Resume.pdf" className="inverted item">
        Download Resume
      </a>
    </div>
  );
};

export default RightMenu;
