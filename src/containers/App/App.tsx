import * as React from 'react';

import Routes from 'constants/Routes';
import { BrowserRouter, Route } from 'react-router-dom';

import ViewportContainer from 'containers/ViewportContainer';

// Main Pages
import IntelPage from 'pages/IntelPage';
import ItemsPage from 'pages/ItemsPage';
import MapPage from 'pages/MapPage';
import QuestsPage from 'pages/QuestsPage';
import SkillsPage from 'pages/SkillsPage';
import SystemPage from 'pages/SystemPage';
import WeaponsPage from 'pages/WeaponsPage';

// Sub Pages
import SavePage from 'pages/SavePage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ViewportContainer shouldScale={true}>
          <Route path={Routes.INDEX} exact={true} component={MapPage} />
          <Route path={Routes.MAP} component={MapPage} />
          <Route path={Routes.QUESTS} component={QuestsPage} />
          <Route path={Routes.ITEMS} component={ItemsPage} />
          <Route path={Routes.WEAPONS} component={WeaponsPage} />
          <Route path={Routes.SKILLS} component={SkillsPage} />
          <Route path={Routes.INTEL} component={IntelPage} />
          <Route path={Routes.SYSTEM} component={SystemPage} />

          <Route path={Routes.SAVE} component={SavePage} />
        </ViewportContainer>
      </BrowserRouter>
    );
  }
}

export default App;
