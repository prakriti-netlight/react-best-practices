import React, { Component, PropTypes } from 'react';

class CodePub extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h2>{this.props.date}</h2>
      </div>
    );
  }
}

CodePub.prototype = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date)
};





