import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { worker } from './mocks/browser.js';
import { IS_DEVELOPMENT } from './services';

if (IS_DEVELOPMENT) {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
