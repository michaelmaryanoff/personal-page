import React from 'react';

import { withRouter } from 'react-router';

import MenuItem from './MenuItem';
import RightMenu from './RightMenu';

const MainMenu = props => {
  const { pathname } = props.location;
  return (
    <div className="ui secondary inverted pointing  menu">
      <div className="ui container">
        <MenuItem route="/" label="Home" pathName={pathname} />
        <MenuItem route="/projects" label="Projects" pathName={pathname} />
        <RightMenu />
      </div>
    </div>
  );
};

export default withRouter(MainMenu);
