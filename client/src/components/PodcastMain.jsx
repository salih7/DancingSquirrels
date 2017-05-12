import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import PodcastList from './PodcastList.jsx';
import PropTypes from 'prop-types';

// class PodcastMain extends React.Component {
//   constructor(props) {
//     super(props);
    // this.search = this.search.bind(this);
    // this.state = {
    //   podcasts: []
    // };
  // }

  // search(query) {
  //   //console.log(query);
  //   $.post('/search', { search: query })
  //     .done((results) => {
  //       console.log(results);
  //       this.setState({
  //         podcasts: results
  //       });
  //     });
  // }

let PodcastMain = function(props) {
  console.log(props);
  return (
    <div className='main-container'>
      <Search onSearch={props.onSearch} />
      <PodcastList podcasts={props.podcasts} />
    </div>
  );
};

PodcastMain.propTypes = {
  onSearch: PropTypes.func.isRequired,
  podcasts: PropTypes.array.isRequired
};

export default PodcastMain;
