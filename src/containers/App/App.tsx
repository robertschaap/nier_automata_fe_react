import * as React from 'react';

import Layout from 'components/Layout';
import ViewportContainer from 'containers/ViewportContainer';
import MapPage from 'pages/MapPage';

class App extends React.Component {
  render() {
    return (
      <ViewportContainer shouldScale={true}>
        <Layout>
          <MapPage />
        </Layout>
      </ViewportContainer>
    );
  }
}

export default App;
