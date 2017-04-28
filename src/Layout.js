import React from 'react';
import './App.sass';
import NavContainer from './containers/NavContainer';
import FooterContainer from './containers/FooterContainer';

const Layout = props => (
  <div>
    <NavContainer />
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
