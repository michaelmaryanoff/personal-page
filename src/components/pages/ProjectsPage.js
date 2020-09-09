import React from 'react';

import ProjectCard from './projectsPageComponents/ProjectCard';

import movieRouletteImage from '../../images/MovieRoulette.png';
import bakingCalculatorImage from '../../images/BakingCalculator.png';
import personalPageImage from '../../images/PersonalPage.png';

import LargeHeader from './projectsPageComponents/LargeHeader';

const ProjectsPage = () => {
  return (
    <div className="basic segment">
      <div className="container">
        <div className="ui centered center aligned stackable grid">
          <LargeHeader label="React Projects" />
          <div className="ui row">
            <div className="ui centered cards">
              <ProjectCard
                imagePath={movieRouletteImage}
                alt="Movie Roulette"
                header="Movie Roulette"
                description="An app which uses the tmdb Api to find a random movie to watch."
                metaContent="Technologies used: React, Redux, HTML, CSS, React Router, TMDB API"
                projectLink="https://play-movie-roulette.web.app"
                gitHubLink="https://github.com/michaelmaryanoff/movieroulettereact"
              />
              <ProjectCard
                imagePath={bakingCalculatorImage}
                alt="Baking Calculator"
                header="High Altitude Baking Calculator"
                description="Allows you to bake at high altitudes."
                metaContent="Technologies used: React, Redux, HTML, CSS, React Router"
                projectLink="https://highaltitudebaking-calculator.web.app"
                gitHubLink="https://github.com/michaelmaryanoff/high-altitude-baking-calculator"
              />
              <ProjectCard
                imagePath={personalPageImage}
                alt="Personal Page"
                header="Personal Page"
                description="My personal website built with React."
                metaContent="Technologies used: React, React Router"
                projectLink="https://highaltitudebaking-calculator.web.app"
                gitHubLink="https://github.com/michaelmaryanoff/high-altitude-baking-calculator"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
