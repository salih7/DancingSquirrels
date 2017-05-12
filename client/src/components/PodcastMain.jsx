import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import PodcastList from './PodcastList.jsx';
import PodcastEpisodes from './PodcastEpisodes.jsx';
import PropTypes from 'prop-types';

// class PodcastMain extends React.Component {
//   constructor(props) {
//     super(props);
//     this.search = this.search.bind(this);
//     this.state = {
//       podcasts: []
//     };
//   }
//
//   search(query) {
//     //console.log(query);
//     $.post('/search', { search: query })
//       .done((results) => {
//         console.log(results);
//         this.setState({
//           podcasts: results
//         });
//       });
//   }
// }

let PodcastMain = (props) => {
  return (
    <div className='main-container'>
      <Search onSearch={props.onSearch} />
      {props.podcasts
      ? <PodcastList
          podcasts={props.podcasts}
          onClickPodcast={props.onClickPodcast} />
        : null
      }
      {Object.keys(props.podcastEpisodes).length > 0
      ? <PodcastEpisodes podcastEpisodes={props.podcastEpisodes} />
      : null
      }
    </div>
  );
};

PodcastMain.propTypes = {
  onSearch: PropTypes.func.isRequired,
  podcasts: PropTypes.array.isRequired,
  podcastEpisodes: PropTypes.object.isRequired,
  onClickPodcast: PropTypes.func.isRequired
};

export default PodcastMain;
