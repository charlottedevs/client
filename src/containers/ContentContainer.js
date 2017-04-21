import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import CreditsContainer from './CreditsContainer';

const ContentContainer = props => (
  props.isAuthenticated ? <CreditsContainer /> : <Login />
);

function mapStateToProps(state) {
  return {
    isAuthenticated: state.accounts.isAuthenticated,
  };
}

ContentContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(ContentContainer);
