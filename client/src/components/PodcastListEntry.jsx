import React from 'react';
import PropTypes from 'prop-types';

class PodcastListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [],
      renderEpisodes: false
    };
    this.onClickPodcast = this.onClickPodcast.bind(this);
  }

  onClickPodcast() {
    // post request to the server 
  }

  render() {
    return (
      <div>
        <div onClick={}><h2>{props.podcast.collectionName}</h2></div>
        <div><img src={props.podcast.artworkUrl30} /></div>
        <div>{props.podcast.artistName}</div>
        {
          this.state.renderEpisodes 
           ? <div></div>
           : null
        }
      </div>
    ); 
  }
}

// var PodcastListEntry = function(props) {
//   return (
//     <div>
//       <div onClick=><h2>{props.podcast.collectionName}</h2></div>
//       <div><img src={props.podcast.artworkUrl30} /></div>
//       <div>{props.podcast.artistName}</div>
//       {
//         //this.randomState 
//         //  ? render
//         //  : don't render
//       }
//     </div>
//   );
// };

PodcastListEntry.propTypes = {
  podcast: PropTypes.object.isRequired
}

export default PodcastListEntry;