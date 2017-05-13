import React from 'react';
import { Link } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1 id='main_title'>Podcastio</h1>
          <Link to="/" onClick={this.props.getHomePage}>Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout" onClick={this.props.logoutUser}>Logout</Link>
        </header>
      </div>
    );
  }
}

export default Layout;
