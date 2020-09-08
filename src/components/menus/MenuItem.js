import React from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const MenuItem = props => {
  let activeClass = props.pathName === props.route ? 'active' : '';
  if (props.pathName === '/' && props.label === 'Home') {
    activeClass = 'active';
  }

  return (
    <Link to={props.route} className={`${activeClass} inverted item`}>
      {props.label}
    </Link>
  );
};

export default withRouter(MenuItem);
