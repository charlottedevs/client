import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as accountActions from '../actions/account-actions';
import CredTransactionsContainer from './CredTransactionsContainer';
import AccountCard from '../components/AccountCard';
import NotFound from '../components/NotFound';

class AccountContainer extends Component {
  componentDidMount() {
    const userId = this.props.match.params.user_id;
    if (this.props.isAuthenticated) {
      this.props.fetchAccount(userId);
    }
  }

  render() {
    return (
      <div>
        {this.props.responseStatus === 404 ? (
          <NotFound />
        ) : (
          <div>
            <div className="jumbotron accountJumbo">
              <h2>Account</h2>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-md-8">
                <AccountCard account={this.props.account} />
              </div>
            </div>
            <div className="container ">
              <CredTransactionsContainer userId={this.props.match.params.user_id} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

AccountContainer.propTypes = {
  fetchAccount: React.PropTypes.func.isRequired,
  responseStatus: React.PropTypes.number.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  match: React.PropTypes.shape({
    params: React.PropTypes.shape({
      user_id: React.PropTypes.string,
    }),
  }).isRequired,
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

AccountContainer.defaultProps = {
  responseStatus: 200,
};


function mapStateToProps(state) {
  return {
    isAuthenticated: state.account.isAuthenticated,
    account: state.account.account,
    responseStatus: state.account.responseStatus,
  };
}


export default connect(mapStateToProps, accountActions)(AccountContainer);
