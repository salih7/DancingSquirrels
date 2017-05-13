import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import PodcastList from './PodcastList.jsx';
import PropTypes from 'prop-types';

const PodcastMain = (props) => {
  return (
    <div className='main-container'>
      <Search onSearch={props.onSearch} />
      <PodcastList
        podcasts={props.podcasts}
        onClickPodcast={props.onClickPodcast} />
    </div>
  );
};

PodcastMain.propTypes = {
  onSearch: PropTypes.func.isRequired,
  podcasts: PropTypes.array.isRequired,
  onClickPodcast: PropTypes.func.isRequired
};

export default PodcastMain;
