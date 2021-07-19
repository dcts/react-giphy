import React, { Component } from 'react';

import SearchBar from './SearchBar.jsx'
import Gif from './Gif.jsx'
import GifList from './GifList.jsx'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="left-section">
          <SearchBar />
          <div className="selected-gif">
            <Gif url="https://upload.wikimedia.org/wikipedia/commons/1/16/Parallax-scroll-example.gif" source="devtest"/>
          </div>
        </div>
        <div className="right-section">
          <GifList />
        </div>
      </div>
    )
  }
}

export default App;
