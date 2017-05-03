import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input 
          type='text' 
          placeholder="Search for podcasts"
          onChange={this.onChange}
        />
        <button>Go!</button>
      </div>
    );
  }
}

export default Search;