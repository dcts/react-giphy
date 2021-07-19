import React, { Component } from 'react';

import SearchBar from './SearchBar.jsx'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="left-section">
          <SearchBar />
          <div className="selected-gif">
            <img width="400" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Parallax-scroll-example.gif" alt="" />
          </div>
        </div>
        <div className="right-section"></div>
      </div>
    )
  }
}

export default App;
