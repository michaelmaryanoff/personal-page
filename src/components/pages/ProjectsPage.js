import React from 'react';

import ProjectCard from './projectsPageComponents/ProjectCard';

import movieRouletteImage from '../../images/MovieRoulette.png';
import bakingCalculatorImage from '../../images/BakingCalculator.png';
import personalPageImage from '../../images/PersonalPage.png';
import coffeeCalculatorImage from '../../images/CoffeeCalc.jpeg';
import movieRouletteSwiftImage from '../../images/MovieRouletteSwift.png';

import LargeHeader from './projectsPageComponents/LargeHeader';

const techListJSAlternates = ' / TMDb API / Axios';

const reactList = (
  <div>
    JS <i className="js icon"></i>/ HTML
    <i className="html5 icon" />/ CSS <i className="css3 icon" />/ LESS
    <p />
    <i className="react icon"></i>React JS / React Redux / React Router
    <p />
    <div></div>
    <p />
    <i className="fire icon"></i>Firebase
  </div>
);

const altReactList = (
  <div>
    JS <i className="js icon"></i>/ HTML
    <i className="html5 icon" />/ CSS <i className="css3 icon" />/ LESS
    <p />
    <i className="react icon"></i>React JS / React Redux / React Router
    <p />
    <div></div>
    <p />
    <i className="fire icon"></i>Firebase{techListJSAlternates}
  </div>
);

const coffeeCalcTechList = (
  <div>
    <i className="swift icon"></i> Swift / UIKit
    <p />
    <i className="mobile alternate icon"></i>Human Interface Guidelines /{' '}
    <i className="rocket icon"></i>Test Flight
  </div>
);

const swiftMovieRouletteTechList = (
  <div>
    <i className="swift icon"></i> Swift / UIKit / <i className="database icon"></i> Core Data
    <p />
    <p />
    TMDb API / AlamoFire / SwiftyJSON
  </div>
);

const swiftVirtualTouristTechList = (
  <div>
    <i className="swift icon"></i> Swift / UIKit / <i className="database icon"></i> Core Data
    <p />
    <p />
    <i className="map pin icon"></i> MapKit / URLSession
  </div>
);

const swiftMovieRouletteDescription = (
  <div>
    A native iOS version of the React application mentioned above. Uses the TMDb service to suggest
    movies depending on a set of user criteria. <p /> <p />{' '}
    <em>
      Note: it is not currently available on the App store, so in order to run the app, you will
      need to download the zip from GitHub.
    </em>
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="ui container">
      <div className="basic segment">
        <div className="ui centered center aligned stackable grid">
          <LargeHeader label="React Projects" />
          <div className="ui row">
            <div className="ui three centered stackable cards">
              <ProjectCard
                imagePath={movieRouletteImage}
                alt="Movie Roulette"
                header="Movie Roulette"
                description="I got tired of sifting through the same old suggestions on Netflix, so I created this application to find some hidden cinematic gems. Users can optionally log in to their TMDb account to view their watchlist and add movies."
                techList={altReactList}
                projectLink="https://play-movie-roulette.web.app"
                gitHubLink="https://github.com/michaelmaryanoff/movieroulettereact"
              />
              <ProjectCard
                imagePath={bakingCalculatorImage}
                alt="Baking Calculator"
                header="High Altitude Baking Calculator"
                description="The perfect solution for frustrated high altitude bakers doing calculations by hand. More than a simple calculator app, it involves lots of complex state management with Redux. My favorite part of this app was the challenge of outputting human-readable volume measurements. And the delcious beta testing, of course."
                techList={reactList}
                projectLink="https://highaltitudebaking-calculator.web.app"
                gitHubLink="https://github.com/michaelmaryanoff/high-altitude-baking-calculator"
              />

              <ProjectCard
                imagePath={personalPageImage}
                alt="Personal Page"
                header="Personal Page"
                description="I set out to create a simple, easy to navigate page to showcase my projects. I wanted to make sure you didn’t have to dig deep to find my projects and source code."
                techList={reactList}
                projectLink=""
                gitHubLink=""
              />
            </div>
          </div>
          <LargeHeader label="Swift projects" />
          <div className="ui row">
            <div className="ui three centered stackable cards">
              <ProjectCard
                imagePath={coffeeCalculatorImage}
                alt="Simple Coffee Calculator"
                header="Simple Coffee Calculator"
                description="I’m a big fan of coffee, and an important component of creating the perfect cup of coffee is the correct coffee to water ratio. This App currently had hundreds of downloads and ranks on the App Store for the search term “Coffee Calculator.”"
                techList={coffeeCalcTechList}
                projectLink="https://apps.apple.com/us/app/simple-coffee-calculator/id1455234543"
                gitHubLink="https://github.com/michaelmaryanoff/Ultimate-Coffee-Calculator"
              />
              <ProjectCard
                imagePath={movieRouletteSwiftImage}
                alt="Movie Roulette (iOS)"
                header="Movie Roulette (iOS)"
                description={swiftMovieRouletteDescription}
                techList={swiftMovieRouletteTechList}
                projectLink="https://github.com/michaelmaryanoff/MovieRoulette"
                gitHubLink="https://github.com/michaelmaryanoff/MovieRoulette"
              />
              <ProjectCard
                imagePath={movieRouletteSwiftImage}
                alt="Virtual Tourist"
                header="Virtual Tourist"
                description="An app that displays Flickr photos from a location of your choosing, anywhere in the world!"
                techList={swiftVirtualTouristTechList}
                projectLink="https://github.com/michaelmaryanoff/MovieRoulette"
                gitHubLink="https://github.com/michaelmaryanoff/MovieRoulette"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
