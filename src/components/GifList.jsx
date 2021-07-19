import React, { Component } from 'react';

import Gif from './Gif.jsx';

class GifList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        {
          url: "https://i.giphy.com/media/FOL5mK0tXUmXe/giphy.gif",
          source: "giphy",
        },
        {
          url: "https://media.tenor.com/images/e8db38ec41d1f182441bde6084274d00/tenor.gif",
          source: "tenor",
        }
      ],
    }
  }

  render() {
    console.log("inside redner");
    console.log(this.state);
    return (
      <div className="gif-list">
        {
          this.state.gifs.map(gifObj => {
            return <Gif url={gifObj.url} source={gifObj.source} />
          })
        }
      </div>
    );
  }
}

export default GifList;
