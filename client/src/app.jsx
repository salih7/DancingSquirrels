import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PodcastMain from './components/PodcastMain.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Layout from './layout/Layout.jsx';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
      episodes: []
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(query) {
    //console.log(query);
    $.post('/search', { search: query })
      .done((results) => {
        console.log(results);
        this.setState({
          podcasts: results
        });
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Layout />
          <Switch>
            <Route name="root" exact path="/" component={() => (<PodcastMain onSearch={this.onSearch} podcasts={this.state.podcasts} /> )}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('podcast-main'));
