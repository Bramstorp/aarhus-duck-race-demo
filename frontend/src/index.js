import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Navigation as Navbar } from './layout/UpdatedNav'
import { Sponsors as Sponsor } from './components/Sponsors/Sponsors'

import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/skp-projekt-aarhus-duck-race">
    <Navbar />
    <App />
    <Sponsor />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
