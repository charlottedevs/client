import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as accountActions from '../actions/account-actions';
import CredTransactionsList from '../components/CredTransactionsList';

class CredTransactionsContainer extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated && this.props.userId) {
      this.props.fetchCredTransactions(this.props.userId);
    }
  }

  render() {
    return (
      <div className="container ">
        <CredTransactionsList
          credTransactions={this.props.credTransactions}
        />
      </div>
    );
  }
}

CredTransactionsContainer.propTypes = {
  credTransactions: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
  fetchCredTransactions: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  userId: React.PropTypes.string.isRequired,
};


function mapStateToProps(state) {
  return {
    isAuthenticated: state.account.isAuthenticated,
    credTransactions: state.account.credTransactions,
  };
}


export default connect(mapStateToProps, accountActions)(CredTransactionsContainer);
