import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = props => {
  return (
    <div className="ui inverted card">
      <a href={props.projectLink} className="image">
        <img src={props.imagePath} alt={props.alt} />
      </a>
      <div className="left aligned content">
        <div className="ui large centered header">{props.header}</div>
        <div className="extra content">{props.metaContent}</div>
        <p />
        <div className="description">{props.description}</div>
      </div>
      <div className="extra content center aligned">
        <a className="ui inverted basic red button" href={props.projectLink}>
          <i className="linkify icon"></i>Live Demo
        </a>
        <a href={props.gitHubLink} className="ui inverted basic red button">
          <i className="github icon"></i>View Code
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imagePath: PropTypes.any.isRequired,
  alt: PropTypes.any.isRequired,
  header: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
  metaContent: PropTypes.any.isRequired,
  projectLink: PropTypes.any.isRequired,
  gitHubLink: PropTypes.any.isRequired
};

export default ProjectCard;
