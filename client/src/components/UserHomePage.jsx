import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import PodcastList from './PodcastList.jsx';
import PropTypes from 'prop-types';

const UserHomePage = function(props) {
  return (
    <div>
      <button>Logout</button>
      <Search onSearch={props.onSearch} />
      <PodcastList podcasts={props.podcasts} />
    </div>
  );
};

export default UserHomePage;