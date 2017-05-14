import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import PodcastListEntry from './PodcastListEntry.jsx';

class PodcastList extends React.Component {
  constructor(props) {
    super(props);
    let hashArr = window.location.hash.split('/');
    this.username = hashArr[hashArr.length - 1];
  }

  onFavorite(podcast) {
    // console.log(hashArr[hashArr.length - 1]);
    $.post('/favorite', {
      username: this.username,
      feedUrl: podcast.feedUrl,
      collectionId: podcast.collectionId,
      artworkUrl100: podcast.artworkUrl100,
      collectionName: podcast.collectionName,
      artistName: podcast.artistName
    })
      .done((result) => {
        this.props.getFavPodcasts();
      });
  }

  render() {
    return (
      <div>
        <h3>{this.props.currentPodcastView}</h3>
        <div className='podcast-wrapper'>
          {
            this.props.podcasts.map((podcast, itr) => {
              return (
                <div key={itr}>
                  <PodcastListEntry
                    key={itr}
                    podcast={podcast}
                    onClickPodcast={this.props.onClickPodcast}
                    loggedIn={this.props.loggedIn}/>
                  { this.props.loggedIn
                    ? <button onClick={this.onFavorite.bind(this, podcast)}>Favorite</button>
                    : null
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

PodcastList.propTypes = {
  podcasts: PropTypes.array.isRequired,
  onClickPodcast: PropTypes.func.isRequired,
  getFavPodcasts: PropTypes.func,
  loggedIn: PropTypes.bool
};

export default PodcastList;
