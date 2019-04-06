import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Resume from './components/Resume';

// eslint-disable-next-line no-undef
const wrapper = document.getElementById('content');
if (wrapper) {
  ReactDOM.render(<Resume name='Alexander W. Badham' />, wrapper);
}
