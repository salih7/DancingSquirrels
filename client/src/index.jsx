import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  search(query) {
    $.post('/search', {search: query})
      .done(function(results) {
        console.log(results);
      });
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));