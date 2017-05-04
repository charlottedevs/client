import React from 'react';

const CredTransaction = ({ credTransaction }) => (
  <div className="col-md-8">
    <div className="card transactionCard">
      <p>{credTransaction.timestamp}</p>
      <h2>{credTransaction.action}</h2>
      <p className={`credibility delta_${credTransaction.delta_type}`}>{credTransaction.delta}<span className="uom">pts</span></p>


    </div>
  </div>
);

CredTransaction.propTypes = {
  credTransaction: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    delta: React.PropTypes.number.isRequired,
    delta_type: React.PropTypes.string.isRequired,
    action: React.PropTypes.string.isRequired,
    timestamp: React.PropTypes.string.isRequired,
  }),
};

CredTransaction.defaultProps = {
  credTransaction: {},
};
export default CredTransaction;
