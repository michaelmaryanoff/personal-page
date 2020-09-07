import React from 'react';

import MenuItem from './MenuItem';

const MainMenu = () => {
  return (
    <div className="ui secondary inverted menu">
      <div className="ui container">
        <MenuItem label="Projects" />
        <MenuItem label="Contact" />
      </div>
    </div>
  );
};

export default MainMenu;
