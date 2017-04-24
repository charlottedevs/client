import React from 'react';
import './App.sass';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';
import Routes from './routes';

const App = () => (
  <div className="App">
    <HeaderContainer />
    <Routes />
    <FooterContainer />
  </div>
);

export default App;
