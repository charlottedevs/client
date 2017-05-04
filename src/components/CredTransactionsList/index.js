import React from 'react';
import CredTransaction from '../CredTransaction';

const CredTransactionsList = ({ credTransactions }) => (
  <div className="row justify-content-md-center">
    {credTransactions.map(credTransaction =>
      <CredTransaction
        key={credTransaction.id}
        credTransaction={credTransaction}
      />,
    )}
  </div>
);

CredTransactionsList.propTypes = {
  credTransactions: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
};

export default CredTransactionsList;
