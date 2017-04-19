import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleLogin from 'react-google-login';
import * as accountActions from '../actions/account-actions';

class AccountContainer extends Component {
  constructor(props) {
    super(props);

    this.handleGoogleResponse = this.handleGoogleResponse.bind(this)
  }

  handleGoogleResponse(response) {
    const tokenId = response.tokenId;
    this.props.createSession(tokenId)
  }

  render() {
    return (
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={this.handleGoogleResponse}
        onFailure={this.handleGoogleResponse}
      />
    );
  }
}


export default connect(null, accountActions)(AccountContainer);
