import * as React from 'react';

import ViewportContainer from 'containers/ViewportContainer';

class App extends React.Component {
  render() {
    return (
      <ViewportContainer shouldScale={true} />
    );
  }
}

export default App;
