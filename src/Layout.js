import React from 'react';
import './App.sass';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';

const Layout = props => (
  <div>
    <HeaderContainer />
    {props.children}
    <FooterContainer />
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node,
};

Layout.defaultProps = {
  children: [],
};

export default Layout;
