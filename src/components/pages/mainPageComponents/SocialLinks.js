import React from 'react';
import IconButton from './IconButton';

const SocialLinks = () => {
  return (
    <div className="ui basic segment">
      <h4>Get in touch</h4>
      <div className="large icon buttons">
        <IconButton link={'https://www.linkedin.com/in/michael-maryanoff/'} buttonType="linkedin" />
        <IconButton link={'https://github.com/michaelmaryanoff'} buttonType="github" />
        <IconButton link={'mailto:michael.maryanoff@gmail.com'} buttonType="envelope" />
      </div>
    </div>
  );
};

export default SocialLinks;
