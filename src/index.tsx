import * as React from 'react';

import { HashRouter } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { NoRocketLab } from './components/NoRocketLab/NoRocketLab';
import { register as registerServiceWorker } from './registerServiceWorker';
import { render } from 'react-snapshot';

render(
  <HashRouter>
    <NoRocketLab>
      <HomePage />
    </NoRocketLab>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
