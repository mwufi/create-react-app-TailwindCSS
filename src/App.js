import React, { Component } from 'react';
import Editor from './components/Editor'
import './index.css';

class App extends Component {
  state = {
    editors: [],
    i: 0,
  }

  componentDidMount() {
    this.addEditor();
  }

  addEditor = (e) => {
    console.log(e);

    this.setState({
      editors: [...this.state.editors, <Editor key={this.state.i+1}/>],
      i: this.state.i+1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.addEditor}>Add another one </button>
        {this.state.editors}
      </div>
    );
  }
}

export default App;
