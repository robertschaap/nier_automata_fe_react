import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Root from 'containers/Root';
import registerServiceWorker from 'utils/registerServiceWorker';

import 'styles/index.scss';

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
