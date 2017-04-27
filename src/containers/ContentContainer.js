import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import ChallengesContainer from './ChallengesContainer';

const ContentContainer = props => (
  props.isAuthenticated ? <ChallengesContainer /> : <Login />
);

function mapStateToProps(state) {
  return {
    isAuthenticated: state.account.isAuthenticated,
  };
}

ContentContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(ContentContainer);
