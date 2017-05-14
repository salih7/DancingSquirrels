import React from 'react';
import PropTypes from 'prop-types';

const PodcastEpisodes = (props) => {
  return (
    <div className='podcast-episodes'>
      <div className='podcast-description'>
        {/*<h3>{props.podcastEpisodes.summary}</h3>*/}
        <img src={props.podcastEpisodes.image} height='200px' width='200px' />
        <h2>{props.podcastEpisodes.title}</h2>
        <p>{props.podcastEpisodes.description}</p>
      </div>
      {props.podcastEpisodes.episodes.map((episode, itr) => {
        return (
          <div key={itr} className='podcast-episode'>
            <h4>{episode.title}</h4>
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
