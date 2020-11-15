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
          <Route component={MapPage} />
        </ViewPort>
      </ThemeProviderContainer>
    </Router>
  );
};
