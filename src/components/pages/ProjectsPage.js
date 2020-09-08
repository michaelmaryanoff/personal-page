import React from 'react';

import ProjectCard from '../projectsPageComponents/ProjectCard';

import movieRouletteImage from '../../images/MovieRoulette.png';

const ProjectsPage = () => {
  return (
      <div className="ui basic segment">
        <div className="ui eight column stackable grid">
          <div className="ui four column center aligned centered row">
              <ProjectCard imagePath={movieRouletteImage} alt="Movie Roulette" header="Movie Roulette" description="An app which uses the tmdb Api to find a random movie to watch." metaContent="Technologies used: React, TMDB API" />
              <ProjectCard imagePath={movieRouletteImage} alt="Baking Calculator"  header="High Altitude Baking Calculator" description="Allows you to bake at high altitudes." metaContent="Technologies used: React, Redux, React Router"/>
            </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
