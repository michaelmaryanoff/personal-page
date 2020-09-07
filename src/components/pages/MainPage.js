import React from 'react';

import HeroHeader from '../HeroHeader';
import Spacer from '../Spacer';

const MainPage = () => {
  return (
    <div className="ui middle aligned grid">
      <Spacer spacing={6} />
      <div className="row">
        <HeroHeader />
      </div>
    </div>
  );
};

export default MainPage;
