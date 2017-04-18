import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreditsContainer from './components/CreditsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><code>Steps for Code Cred</code></h2>
        </div>
       <CreditsContainer />
      </div>
    );
  }
}

export default App;
