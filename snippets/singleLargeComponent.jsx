class BadComponent extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/images/logo.png" className="App-logo" alt="logo" />
          <h2>This is a header</h2>
        </div>
        <section>
          <p>This is section 1</p>
        </section>
        <section>
          <p>This is section 2</p>
        </section>
        <footer>
          <h2>Footer title</h2>
          <p>I am a footer.</p>
        </footer>
      </div>
    );
  }
}