import React from 'react';
import './App.sass';
import CreditsContainer from './components/CreditsContainer';
import AccountContainer from './components/AccountContainer';

const App = () => (
  <div className="App">
    <div className="App-header jumbotron">
      <h2><code>Steps for Code Cred</code></h2>
    </div>
    <CreditsContainer />
    <AccountContainer />
  </div>
);

export default App;
