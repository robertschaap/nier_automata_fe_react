import '../styles/normalize.css';

import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router } from 'react-router-dom';

import { ThemeProviderContainer } from './ThemeProviderContainer';

import { ViewPort } from 'components/ViewPort';
import { baseRoutes } from 'constants/routes';
import { IntelPage } from 'pages/IntelPage';
import { ItemsPage } from 'pages/ItemsPage';
import { MapPage } from 'pages/MapPage';
import { QuestsPage } from 'pages/QuestsPage';
import { WeaponsPage } from 'pages/WeaponsPage';

export const RootContainer: React.FC = () => {
  return (
    <Router history={createBrowserHistory()}>
      <ThemeProviderContainer>
        <ViewPort>
          <Route exact path="/" component={MapPage} />
          <Route path={baseRoutes.MAP_PAGE} component={MapPage} />
          <Route path={baseRoutes.QUESTS_PAGE} component={QuestsPage} />
          <Route path={baseRoutes.ITEMS_PAGE} component={ItemsPage} />
          <Route path={baseRoutes.WEAPONS_PAGE} component={WeaponsPage} />
          <Route path={baseRoutes.SKILLS_PAGE} component={undefined} />
          <Route path={baseRoutes.INTEL_PAGE} component={IntelPage} />
          <Route path={baseRoutes.SYSTEM_PAGE} component={undefined} />
        </ViewPort>
      </ThemeProviderContainer>
    </Router>
  );
};
