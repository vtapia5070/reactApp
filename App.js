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

/* Uncomment below for stateless component */
// const App = () => <h1>I'm a stateless component!</h1>

ReactDOM.render(
  <App txt="this is the props value" />,
  document.getElementById('app')
);

// export default App
