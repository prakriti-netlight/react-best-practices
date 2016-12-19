import React, { Component } from 'react';

class DemoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
  }
  increment() {
    this.setState({ number: this.state.number + 1 });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/images/logo.png" className="App-logo" alt="logo" />
          <h2>Welcome to React Best Practices Christmas Edition</h2>
        </div>
        <h3>Number: {this.state.number}</h3>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default DemoComponent;