import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
  }
  increment() {
    this.setState({ number: this.state.number + 1 });
  }
  render() {
    return (
      <div>
        <p>Number: {this.state.number}</p>
        <button onClick={this.increment()}>Increment</button>
      </div>
    );
  }
}