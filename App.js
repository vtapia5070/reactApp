import React from 'react';
import ReactDOM from 'react-dom';

/* stateful component */
class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
    // return <h1>{this.props.txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}
/* Uncomment below for stateless component */
// const App = () => <h1>I'm a stateless component!</h1>

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);

// export default App
