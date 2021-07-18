import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import Tenor from './services/Tenor.js';


class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: true,
      counter: 0,
    }

    this.tenor = new Tenor("NBHUCIKD8UJ7");
    this.tenor.search("Puppy").then(res => {
      console.log(res);
    })
  }

  handleClick = () => {
    console.log("clicked");
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter+1,
    });
  }
  render() {
    return (
      <div className={this.state.clicked ? "clicked" : null}
        onClick={this.handleClick}>
        Hello,
        {this.props.name} ({this.state.counter})
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
