import React from 'react';
import './App.sass';
import HeaderContainer from './containers/HeaderContainer';
import ContentContainer from './containers/ContentContainer';
import FooterContainer from './containers/FooterContainer';

const App = () => (
  <div className="App">
    <HeaderContainer />
    <ContentContainer />
    <FooterContainer />
  </div>
);

export default App;
