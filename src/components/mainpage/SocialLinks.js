import React from 'react';
import IconButton from './IconButton';

const SocialLinks = () => {
  return (
    <div className="ui basic segment">
      <h4>Get in touch</h4>
      <div className="large icon buttons">
        <IconButton buttonType="linkedin" />
        <IconButton buttonType="github" />
        <IconButton buttonType="envelope" />
      </div>
    </div>
  );
};

export default SocialLinks;
