import React from 'react';
import './App.sass';
import ContentContainer from './containers/ContentContainer';

const App = () => (
  <div className="App">
    <div className="App-header jumbotron">
      <h2><code>Steps for Code Cred</code></h2>
    </div>
    <ContentContainer />
  </div>
);

export default App;
