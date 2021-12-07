import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/aarhus-duck-race-demo">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

