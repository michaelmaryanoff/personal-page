import '../assets/fomantic/dist/semantic.css';

import React from 'react';

import MainPage from './pages/MainPage';
import MainMenu from './menus/MainMenu';

const App = () => {
  return (
    <div>
      <MainMenu />
      <MainPage />
    </div>
  );
};

export default App;
