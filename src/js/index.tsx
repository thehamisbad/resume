import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Resume from './components/Resume';

import * as resume from './resume.json';

const resumeComponent = (<Resume 
                            name={resume.name}
                            summary={resume.summary}
                            menu={resume.menu}
                        />)

// eslint-disable-next-line no-undef
const wrapper = document.getElementById('content');
if (wrapper) {
  ReactDOM.render(resumeComponent, wrapper);
}
