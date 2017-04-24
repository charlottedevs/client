import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const ProtectedRoute = (props) => {
  if (props.isAuthenticated) {
    return (<Route {...props} />);
  }

  return (<Redirect to="/login" />);
};


ProtectedRoute.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.account.isAuthenticated,
  };
}


export default connect(mapStateToProps)(ProtectedRoute);
