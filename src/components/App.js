import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import InstaList from './InstaList'
import PicCreate from './PicCreate';

class App extends Component {
  state = {
    AddMode: 0
  }

  _modHandler = mode => {
    this.setState({
      AddMode: mode
    });
  }

  render() {
    return (
      <div>
        {
          this.state.AddMode ? 
          <PicCreate modChanger={this._modHandler} /> : 
          <InstaList modChanger={this._modHandler} />
        }
      </div>
      
    )
  }
}

export default App
