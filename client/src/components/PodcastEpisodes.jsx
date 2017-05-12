import React from 'react';
import PropTypes from 'prop-types';

let PodcastEpisodes = (props) => {
  return (
    <div className='podcast-episodes'>
      <h1>{props.podcastEpisodes.title}</h1>
      <h3>{props.podcastEpisodes.summary}</h3>
      <img src={props.podcastEpisodes.image} />
      <h4>{props.podcastEpisodes.description}</h4>
      {props.podcastEpisodes.episodes.map((episode, itr) => {
        return (
          <div key={itr} className='podcast-episode'>
            <h3>{episode.title}</h3>
            <audio controls>
              <source src={episode.url} type="audio/mpeg" />
            </audio>
          </div>
        );
      })}
    </div>
  );
};
// {
//   this.state.renderEpisodes
//    ? <div className='podcast-episodes-wrapper'>
//     {
//       this.state.podcast.episodes.map((episode, itr) => {
//         return (
//           <div key={itr} className='podcast-episode'>
//             <h3>Title: {episode.title}</h3>
//             <audio controls>
//               <source src={episode.url} type="audio/mpeg" />
//             </audio>
//           </div>
//         );
//       }).slice(0, 10)
//     }
//     </div>
//    : null
// }

PodcastEpisodes.propTypes = {
  podcastEpisodes: PropTypes.object.isRequired
};

export default PodcastEpisodes;
