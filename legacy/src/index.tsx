import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Root from 'containers/Root';
import registerServiceWorker from 'utils/registerServiceWorker';

// Disabled because first want to normalize browser styles before loading our own
// tslint:disable:ordered-imports
import 'styles/normalize.css';
import 'styles/index.scss';
// tslint:enable:ordered-imports

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
