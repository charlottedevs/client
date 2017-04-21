import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';

const HeaderContainer = props => (
  <nav className="navbar">
    <a className="navbar-brand" href="www.google.com">Charlotte Junior Devs</a>
    <Account picture={props.picture} credibility={props.credibility} />
  </nav>
);

function mapStateToProps(state) {
  return {
    picture: state.account.picture,
    credibility: state.account.credibility,
  };
}

HeaderContainer.propTypes = {
  picture: PropTypes.string.isRequired,
  credibility: PropTypes.number,
};

HeaderContainer.defaultProps = {
  credibility: null,
};

export default connect(mapStateToProps, null)(HeaderContainer);
