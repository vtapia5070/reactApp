import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <Button>I <Heart /> React</Button>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.children}</button>
    )
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default App
