import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
// <MyComponent text="Hello, CodePub!" />