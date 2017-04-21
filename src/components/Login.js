import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
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
    return (
      <div>
        <h3>Please log in</h3>
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={this.handleGoogleResponse}
          onFailure={this.handleGoogleResponse}
        />
      </div>
    );
  }
}

Login.propTypes = {
  createSession: PropTypes.func.isRequired,
};

export default connect(null, accountActions)(Login);
