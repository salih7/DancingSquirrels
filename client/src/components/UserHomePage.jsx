import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';
import PodcastList from './PodcastList.jsx';



class UserHomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-container'>
        <button>Logout</button>
      </div>
    );
  }
}


export default UserHomePage;