import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PodcastMain from './components/PodcastMain.jsx';
import PodcastEpisodes from './components/PodcastEpisodes.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Layout from './layout/Layout.jsx';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
      podcastEpisodes: {}
    };

    this.clearSearchResults = this.clearSearchResults.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onClickPodcast = this.onClickPodcast.bind(this);
  }

  componentDidMount() {
   $.get('/topTen')
    .done((results) => {
      this.setState({
        podcasts: results
      });
    }) 
  }

  clearSearchResults() {
    this.setState({
      podcasts: [],
      podcastEpisodes: {}
    });
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

  onClickPodcast(feedUrl, collectionId, callback) {
    // post request to the server
    $.post('/podcast', {
      feedUrl: feedUrl,
      collectionId: collectionId
    })
      .done((podcastEpisodes) => {
        // when done renderEpisodes is true AND episodes is set to the results
        // console.log(podcastEpisodes[0]);
        this.setState({
          podcastEpisodes: podcastEpisodes[0],
        });
        console.log('podcastEpisodes: ', this.state.podcastEpisodes);
        console.log('podcasts: ', this.state.podcasts);
        callback();
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Layout clearSearchResults={this.clearSearchResults}/>
          <Switch>
            <Route
              name="root"
              exact path="/"
              component={() => (<PodcastMain
                                  onSearch={this.onSearch}
                                  podcasts={this.state.podcasts}
                                  onClickPodcast={this.onClickPodcast}/> )} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/podcasts/episodes" 
                   component={() => (<PodcastEpisodes podcastEpisodes={this.state.podcastEpisodes} /> )} /> 
                                             

          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('podcast-main'));
