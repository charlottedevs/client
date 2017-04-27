import React from 'react';
import './App.sass';
import Layout from './Layout';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Layout>
      <Routes />
    </Layout>
  </div>
);

export default App;
