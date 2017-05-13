import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import PodcastList from './PodcastList.jsx';
import PropTypes from 'prop-types';

class UserHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  render() {
    return (
      <div className='main-container'>
        <h1>UserHomePage</h1>
        <Search onSearch={this.props.onSearch} />
        <PodcastList
          podcasts={this.props.podcasts}
          onClickPodcast={this.props.onClickPodcast}
          loggedIn={this.state.loggedIn}/>
      </div>
    );
  }
}

UserHomePage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  podcasts: PropTypes.array.isRequired,
  onClickPodcast: PropTypes.func.isRequired
};

export default UserHomePage;
