import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Resume from './components/Resume';

import * as resume from './resume.json';

// eslint-disable-next-line no-undef
const wrapper = document.getElementById('content');
if (wrapper) {
  ReactDOM.render((
    <HashRouter>
      <Resume 
          name={resume.name}
          summary={resume.summary}
          menu={resume.menu}
      />
    </HashRouter>
  ), wrapper);
}
