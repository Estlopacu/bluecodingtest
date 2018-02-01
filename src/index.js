import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Router, browserHistory }from 'react-router';
import '../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './styles/styles.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
