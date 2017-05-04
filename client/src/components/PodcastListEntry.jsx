import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

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
    if (this.state.renderEpisodes) {
      this.setState({
        renderEpisodes: false
      });
    } else {
      $.post('/podcast', {
        feedUrl: this.props.podcast.feedUrl,
        collectionId: this.props.podcast.collectionId
      })
        .done((episodes) => {
          // when done renderEpisodes is true AND episodes is set to the results
          console.log(episodes);
          this.setState({
            episodes: episodes,
            renderEpisodes: true
          });
        });
      }
  }

  render() {
    return (
      <div>
        <div onClick={this.onClickPodcast}><h2>{this.props.podcast.collectionName}</h2></div>
        <div><img src={this.props.podcast.artworkUrl100} /></div>
        <div>{this.props.podcast.artistName}</div>
        {
          this.state.renderEpisodes 
           ? <div>
            {
              this.state.episodes.map((episode) => {
              return (
                <div>
                  {
                    episode.episodes.map((ep) => {
                      return (
                        <div>
                          <h3>{ep.title}</h3>
                          <audio controls>
                            <source src={ep.url} type="audio/mpeg" />
                          </audio>
                        </div>
                      );
                    }) 
                  }
                </div>
              );
            })} 

            </div>
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