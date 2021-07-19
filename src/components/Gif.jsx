import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className="gif" src={this.props.url} ></img>
    );
  }
}

export default Gif;
