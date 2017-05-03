import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import * as accountActions from '../actions/account-actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleGoogleResponse = this.handleGoogleResponse.bind(this);
  }

  handleGoogleResponse(response) {
    const tokenId = response.tokenId;
    this.props.createSession(tokenId);
  }

  render() {
    if (this.props.isAuthenticated) {
      return (<Redirect to="/" />);
    }

    return (
      <div className="jumbotron">
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-lg-4">
            <div className="loginCard card">
              <h3>Please log in</h3>
              <GoogleLogin
                className="btn btn-primary"
                clientId={process.env.GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={this.handleGoogleResponse}
                onFailure={this.handleGoogleResponse}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  createSession: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  { isAuthenticated: state.account.isAuthenticated }
);
export default connect(mapStateToProps, accountActions)(Login);
