import React from 'react';

import ProjectCard from './projectsPageComponents/ProjectCard';

import movieRouletteImage from '../../images/MovieRoulette.png';
import bakingCalculatorImage from '../../images/BakingCalculator.png';
import personalPageImage from '../../images/PersonalPage.png';
import cofeeCalculatorImage from '../../images/CoffeeCalc.jpeg';
import movieRouletteSwiftImage from '../../images/MovieRouletteSwift.png';

import LargeHeader from './projectsPageComponents/LargeHeader';

const ProjectsPage = () => {
  return (
    <div className="ui container">
      <LargeHeader label="React Projects" />
      <div className="ui stacking center aligned centered grid">
        <div className="ui centered center aligned row">
          <div className="ui two cards">
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
          </div>
        </div>
        <div className="ui centered center aligned row">
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
      {/* <LargeHeader label="Swift projects" />
      <div className="ui eight column stackable grid">
        <div className="ui three column center aligned centered row">
          <ProjectCard
            imagePath={cofeeCalculatorImage}
            alt="Simple coffee calculator"
            header="Simple coffee calculator"
            description="A simple calculator app that calculates coffee to water ratios."
            metaContent="Technologies used: Swift, UIKit"
            projectLink="https://apps.apple.com/us/app/simple-coffee-calculator/id1455234543"
            gitHubLink="https://github.com/michaelmaryanoff/Ultimate-Coffee-Calculator"
          />
          <ProjectCard
            imagePath={movieRouletteSwiftImage}
            alt="Movie Roulette (iOS)"
            header="Movie Roulette (iOS)"
            description={
              'The iOS version of the "Movie Roulette" app. Note: this app is currently not featured on the app store, so you will need to run via readme instructions on github repo'
            }
            metaContent="Technologies used: Swift, UIKit, SwiftyJSON, TMDB Api"
            projectLink="https://github.com/michaelmaryanoff/MovieRoulette"
            gitHubLink="https://github.com/michaelmaryanoff/MovieRoulette"
          />
        </div>
      </div> */}
    </div>
  );
};

export default ProjectsPage;
