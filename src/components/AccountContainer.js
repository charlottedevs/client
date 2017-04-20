import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import * as accountActions from '../actions/account-actions';

class AccountContainer extends Component {
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
        <h3>{ this.props.isAuthenticated && "Yay you're authenticated" }</h3>
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

AccountContainer.propTypes = {
  createSession: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

AccountContainer.defaultProps = {
  isAuthenticated: false,
};

const mapStateToProps = state => (
  { isAuthenticated: state.accounts.isAuthenticated }
);


export default connect(mapStateToProps, accountActions)(AccountContainer);
