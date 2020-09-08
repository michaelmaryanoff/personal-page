import React from 'react';

const ProjectCard = props => {
  return (
    <div className="column">
      <div className="ui fluid inverted card">
        <div className="image">
          <img src={props.imagePath} alt={props.alt} />
        </div>
        <div className="content">
          <div className="ui large centered header">{props.header}</div>
          <div className="description">{props.description}</div>
          <div className="extra content">{props.metaContent} </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
