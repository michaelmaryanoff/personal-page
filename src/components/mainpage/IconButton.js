import React from 'react';

const IconButton = props => {
  return (
    <button className="ui circular inverted basic icon button">
      <i className={`${props.buttonType} icon`}></i>
    </button>
  );
};

export default IconButton;
