import React from 'react';
import ReactDOM from 'react-dom';
import PodcastMain from './components/PodcastMain.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Layout from './layout/Layout.jsx';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const app = (
  <Router>    
    <div>
      <Layout />
      <Switch>
        <Route exact path="/" component={PodcastMain}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(app, document.getElementById('podcast-main'));