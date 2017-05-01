import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as accountActions from '../actions/account-actions';
import Account from '../components/Account';

class AccountContainer extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.fetchAccount();
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron accountJumbo">
          <h2>Account</h2>
        </div>
        <div className="container ">
          <Account
            account={this.props.account}
            updateField={this.props.updateField}
            updateAccount={this.props.updateAccount}
            isUpdate={this.props.successfulUpdate}
          />
        </div>
      </div>
    );
  }
}

AccountContainer.propTypes = {
  fetchAccount: React.PropTypes.func.isRequired,
  successfulUpdate: React.PropTypes.bool.isRequired,
  updateField: React.PropTypes.func.isRequired,
  updateAccount: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  account: React.PropTypes.shape({
    id: React.PropTypes.number,
    first_name: React.PropTypes.string,
    last_name: React.PropTypes.string,
    credibility: React.PropTypes.number,
    github_handle: React.PropTypes.string,
    linkedin_url: React.PropTypes.string,
    resume_site_url: React.PropTypes.string,
    stackoverflow_url: React.PropTypes.string,
    twitter_handle: React.PropTypes.string,
  }).isRequired,
};


function mapStateToProps(state) {
  return {
    account: state.account.account,
    isAuthenticated: state.account.isAuthenticated,
    successfulUpdate: state.account.successfulUpdate,
  };
}


export default connect(mapStateToProps, accountActions)(AccountContainer);
