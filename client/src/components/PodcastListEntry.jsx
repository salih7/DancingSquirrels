import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class PodcastListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.onClickPodcast = this.onClickPodcast.bind(this);
    // this.onFavorite = this.onFavorite.bind(this);
    // let hashArr = window.location.hash.split('/');
    // this.username = hashArr[hashArr.length - 1];
  }

  // onFavorite() {
  //   // console.log(hashArr[hashArr.length - 1]);
  //   $.post('/favorite', {
  //     username: this.username,
  //     feedUrl: this.props.podcast.feedUrl,
  //     collectionId: this.props.podcast.collectionId,
  //     artworkUrl100: this.props.podcast.artworkUrl100,
  //     collectionName: this.props.podcast.collectionName,
  //     artistName: this.props.podcast.artistName
  //   })
  //     .done(result => console.log(result));
  // }

  onClickPodcast() {
    this.props.onClickPodcast(this.props.podcast.feedUrl, this.props.podcast.collectionId, () => {
      this.context.router.history.push('/podcasts/episodes');
    });
  }

  render() {
    return (
      <div className='podcast'>
        <img onClick={this.onClickPodcast} src={this.props.podcast.artworkUrl100} />
        <div className='podcast-title-author'>
          <h4 onClick={this.onClickPodcast}>{this.props.podcast.collectionName}</h4>
          <h5 onClick={this.onClickPodcast}>{this.props.podcast.artistName}</h5>
        </div>
      </div>
    );
  }

}

PodcastListEntry.contextTypes = {
  router: PropTypes.object
};

PodcastListEntry.propTypes = {
  podcast: PropTypes.object.isRequired,
  onClickPodcast: PropTypes.func.isRequired
};

export default PodcastListEntry;
