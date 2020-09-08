import React from 'react';
import PropTypes from 'prop-types';

const LargeHeader = props => {
  return (
    <h2 style={{ fontSize: 72 }} className="ui huge inverted center aligned header">
      {props.label}
    </h2>
  );
};

LargeHeader.propTypes = {
  label: PropTypes.string.isRequired
};

export default LargeHeader;
