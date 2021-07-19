import React, { Component } from 'react';

import SearchBar from './SearchBar.jsx'
import Gif from './Gif.jsx'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="left-section">
          <SearchBar />
          <div className="selected-gif">
            <Gif url="https://upload.wikimedia.org/wikipedia/commons/1/16/Parallax-scroll-example.gif" />
          </div>
        </div>
        <div className="right-section"></div>
      </div>
    )
  }
}

export default App;
