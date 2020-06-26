import React from 'react'; 
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './icons/style.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

serviceWorker.unregister();
