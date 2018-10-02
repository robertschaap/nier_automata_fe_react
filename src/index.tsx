import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from 'containers/App';

import registerServiceWorker from 'utils/registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
