class GoodComponent extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section1 />
        <Section2 />
        <Footer />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src="/images/logo.png" className="App-logo" alt="logo" />
        <h2>This is a header</h2>
      </div>
    );
  }
}