import React from 'react';
import { render } from 'react-dom';

import App from './app';

// electron react app should use HashRouter

render(<App />, document.getElementById('root'));
