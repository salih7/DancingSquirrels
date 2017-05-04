import React from 'react';
import PropTypes from 'prop-types';

var PodcastListEntry = function(props) {
  return (
    <div>
      <div>
        <h1>{props.podcast.collectionName}</h1>
      </div>
      <div>
        <img src={props.podcast.artworkUrl30} />
      </div>
      <div>
        {props.podcast.artistName}
      </div>
    </div>
  );
};

PodcastListEntry.propTypes = {
  podcast: PropTypes.object.isRequired
}

export default PodcastListEntry;