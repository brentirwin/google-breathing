import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '1-minute breathing exercise'
    }
  }
  render() {
    return (
      <div className="vertical-align">
        <div className="App">
          <Circle />
          <Text text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;

const Circle = () => {
  return (
    <div id="circle">
      <div id="triangle">
      </div>
    </div>
  );
}

const Text = props => {
  return <div id="text">{props.text}</div>;
}
