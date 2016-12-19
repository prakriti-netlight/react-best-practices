import React, { Component, PropTypes } from 'react';

class CodePub extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title || "(no title)"}</h1>
        <h2>{this.props.date}</h2>
      </div>
    );
  }
}

CodePub.propTypes = {
title: PropTypes.string
};