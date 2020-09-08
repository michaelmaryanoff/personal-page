import React from 'react';

const IconButton = props => {
  return (
    <a href={props.link} className="ui circular inverted basic icon button">
      <i className={`${props.buttonType} icon`}></i>
    </a>
  );
};

export default IconButton;
