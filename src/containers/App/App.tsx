import * as React from 'react';

import Routes from 'constants/Routes';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from 'components/Layout';
import ViewportContainer from 'containers/ViewportContainer';

import ItemsPage from 'pages/ItemsPage';
import MapPage from 'pages/MapPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ViewportContainer shouldScale={true}>
          <Layout>
            <Route path={Routes.INDEX} exact={true} component={MapPage} />
            <Route path={Routes.MAP} component={MapPage} />
            <Route path={Routes.ITEMS} component={ItemsPage} />
          </Layout>
        </ViewportContainer>
      </BrowserRouter>
    );
  }
}

export default App;
