import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';

const HeaderContainer = props => (
  <div className="App-header jumbotron">
    <h2><code>Steps for Code Cred</code></h2>
    <Account picture={props.picture} credibility={props.credibility} />
  </div>
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
