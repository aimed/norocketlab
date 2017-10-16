import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import { NoRocketLab } from './components/NoRocketLab/NoRocketLab';
import { WelcomePage } from './components/WelcomePage/WelcomePage';
import { register as registerServiceWorker } from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <NoRocketLab>
      <WelcomePage />
    </NoRocketLab>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
