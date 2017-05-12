import React from 'react';
import PropTypes from 'prop-types';
import PodcastListEntry from './PodcastListEntry.jsx';

var PodcastList = function(props) {
  return (
    <div className='podcast-wrapper'>
      {
        props.podcasts.map((podcast, itr) =>
          <PodcastListEntry
            key={itr}
            podcast={podcast}
            onClickPodcast={props.onClickPodcast}/>
        )
      }
    </div>
  );
};

PodcastList.propTypes = {
  podcasts: PropTypes.array.isRequired,
  onClickPodcast: PropTypes.func.isRequired
};

export default PodcastList;
