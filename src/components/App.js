// Fomantic UI CSS
import '../assets/fomantic/dist/semantic.css';

import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MainMenu from './menus/MainMenu';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainMenu />
        <Switch>
          <Route path="/" exact component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
