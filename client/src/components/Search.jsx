import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    // console.log(this._query.value);
    if (event.charCode === 13) {
      console.log(event.keyCode);
      this.props.onSearch(this._query.value);
    }
  }

  render() {
    return (
      <div className='search'>
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        <input
          type='text'
          placeholder="Search"
          onChange={this.onChange}
          onKeyPress={this.onSearch}
          ref={(input) => this._query = input }
        />
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
