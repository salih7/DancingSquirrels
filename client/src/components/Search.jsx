import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    // console.log(this._query.value);
    this.props.onSearch(this._query.value);
  }

  render() {
    return (
      <div className='search'>
        <input
          type='text'
          placeholder="Search for podcasts"
          onChange={this.onChange}
          ref={(input) => this._query = input }
        />
        <button onClick={this.onSearch}>Go!</button>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
