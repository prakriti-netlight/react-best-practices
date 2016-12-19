class CodePub extends Component {
  render() {
    let titleComponent;
    if (this.props.title) {
      titleComponent = <h1>{this.props.title}</h1>;
    } else {
      titleComponent = <h1>(no title)</h1>;
    }
    return (
      <div>
        {titleComponent}
        <h2>{this.props.date}</h2>
      </div>
    );
  }
}