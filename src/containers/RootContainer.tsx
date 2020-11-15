import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router } from 'react-router-dom';

import { ThemeProviderContainer } from './ThemeProviderContainer';

import { ViewPort } from 'components/ViewPort';
import { MapPage } from 'pages/MapPage';

import '../styles/normalize.css';

export const RootContainer: React.FC = () => {
  return (
    <Router history={createBrowserHistory()}>
      <ThemeProviderContainer>
        <ViewPort>
          <Route exact path="/" component={MapPage} />
          <Route path="/map" component={MapPage} />
          <Route path="/quests" component={undefined} />
          <Route path="/items" component={undefined} />
          <Route path="/weapons" component={undefined} />
          <Route path="/skills" component={undefined} />
          <Route path="/intel" component={undefined} />
          <Route path="/system" component={undefined} />
          <Route component={MapPage} />
        </ViewPort>
      </ThemeProviderContainer>
    </Router>
  );
};
