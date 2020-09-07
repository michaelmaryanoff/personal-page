import React from 'react';

const HeroHeader = () => {
  return (
    <div className="centered center aligned column" style={{ height: 100 }}>
      <div className="ui basic segment">
        <h2 style={{ fontSize: 72 }} className="ui huge inverted header">
          Michael Maryanoff
        </h2>
        <h3 className="ui large inverted header">
          I write web applications in React ⚛
          <p />
          <p />
          Check out my work here:
        </h3>
      </div>
    </div>
  );
};

export default HeroHeader;
