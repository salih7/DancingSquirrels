import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import PodcastList from './PodcastList.jsx'
import Layout from '../layout/Layout.jsx';

class PodcastMain extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      podcasts: []
    }
  }

  search(query) {
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
      <div>
        <div>
          <Layout />
        </div>
        <div>
          <Search onSearch={this.search} />
        </div>
        <div>
          <PodcastList podcasts={this.state.podcasts} />
        </div>
      </div>
    )
  }
}

export default PodcastMain;