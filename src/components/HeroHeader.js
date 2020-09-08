import React from 'react';

import SocialLinks from './mainpage/SocialLinks';

const HeroHeader = () => {
  return (
    <div className="centered center aligned column" style={{ height: 100 }}>
      <div className="ui basic segment">
        <h2 style={{ fontSize: 72 }} className="ui huge inverted header">
          Michael Maryanoff
        </h2>
        <h3 className="ui large inverted header">
          I build web applications with React ⚛
          <p />
          <p />
          Check out my work here:
        </h3>
        <button className="ui basic inverted button">PROJECTS</button>
        <SocialLinks />
      </div>
    </div>
  );
};

export default HeroHeader;
