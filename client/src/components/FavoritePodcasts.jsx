import React from 'react';
import $ from 'jquery';
import PodcastListEntry from './PodcastListEntry.jsx';
import PropTypes from 'prop-types';


class FavoritePodcasts extends React.Component {
  constructor(props) {
    super(props);
    // let hashArr = window.location.hash.split('/');
    // this.username = hashArr[hashArr.length - 1];
    // this.getFavorites = this.getFavorites.bind(this);
    // this.state = {
    //   favoritePodcasts: []
    // };
  }

  componentDidMount() {
    this.props.getFavPodcasts();
  }

  // getFavorites() {
  //   $.get('/favorite', {
  //     username: this.username
  //   })
  //     .done((result) => {
  //       this.setState({
  //         favoritePodcasts: result
  //       });
  //     });
  // }

  onDelete(podcast) {
    $.ajax({
      url: '/favorite/' + podcast.collectionId,
      method: 'DELETE'
    })
      .done((result) => {
        console.log('Delete successful', result);
        this.props.getFavPodcasts();
      });
  }

  render() {
    return (
      <div>
        {console.log(this.loggedIn)}
        {
          this.props.favPodcasts.length > 0
          ?
          <div>
            <h3>My Favorites</h3>
              <div className='podcast-wrapper'>
                  {
                    this.props.favPodcasts.map((podcast, itr) => {
                      return (
                        <div key={itr}>
                          <PodcastListEntry
                          key={itr}
                          podcast={podcast}
                          onClickPodcast={this.props.onClickPodcast}
                          loggedIn={this.props.loggedIn}/>
                        <button onClick={this.onDelete.bind(this, podcast, itr)}>Delete</button>
                        </div>
                      );
                    })
                  }
              </div>
          </div>
          : null
        }
      </div>
    );
  }
}

FavoritePodcasts.propTypes = {
  favPodcasts: PropTypes.array,
  getFavPodcasts: PropTypes.func.isRequired,
  onClickPodcast: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

export default FavoritePodcasts;
