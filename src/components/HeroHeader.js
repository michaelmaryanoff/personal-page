import React from 'react';

import { Link } from 'react-router-dom';

import SocialLinks from '../components/pages/mainPageComponents/SocialLinks';

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
        <Link to={'/projects'} className="ui basic inverted button">
          PROJECTS
        </Link>
        <SocialLinks />
      </div>
    </div>
  );
};

export default HeroHeader;
