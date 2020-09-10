import React from 'react';

import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="ui basic centered center aligned segment">
      <h2 style={{ fontSize: 72 }} className="ui huge inverted header">
        404 Error: Page not found.
      </h2>
      <h2 className="ui inverted header">
        <Link to="/" style={{ color: 'white' }}>
          Click here to head home
        </Link>
      </h2>
    </div>
  );
};

export default ErrorPage;
