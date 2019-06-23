import * as React from 'react';

import ViewportContainer from 'containers/ViewportContainer';
import MapPage from 'pages/MapPage';

class App extends React.Component {
  render() {
    return (
      <ViewportContainer shouldScale={true}>
        <MapPage />
      </ViewportContainer>
    );
  }
}

export default App;
