import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './index.css';
import App from './App';
import Weather from './containers/Weather/Weather';
import Metar from './containers/Weather/Metar/Metar';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/weather" component={Weather} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/metar" component={Metar} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
