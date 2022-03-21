class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
The above code is equivalent to:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
