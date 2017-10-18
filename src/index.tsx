import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { NoRocketLab } from './components/NoRocketLab/NoRocketLab';
import { register as registerServiceWorker } from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <NoRocketLab>
      <HomePage />
    </NoRocketLab>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
