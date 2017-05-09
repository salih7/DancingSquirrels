import React from 'react';
import ReactDOM from 'react-dom';
import PodcastMain from './components/PodcastMain.jsx';
import Signup from './components/Signup.jsx';

import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';


const app = (
  <Router>    
    <div>
      <div className="top-menu">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
      <Route path="/home" component={PodcastMain} />
      <Route path="/signup" component={Signup} />
      <Redirect from="/" to="/home" />
    </div>
  </Router>
);

//$(function() {
  ReactDOM.render(app, document.getElementById('podcast-main'));
//});
