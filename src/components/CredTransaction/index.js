import React from 'react';

const CredTransaction = ({ credTransaction }) => (
  <div>
    <h2>Cred Transaction!</h2>
    <p>action: {credTransaction.action}</p>
    <p>delta: {credTransaction.delta}</p>
    <p>use {`'delta_${credTransaction.delta_type}'`} for className</p>
    <br />
    <br />
    <br />
  </div>

);

CredTransaction.propTypes = {
  credTransaction: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    delta: React.PropTypes.number.isRequired,
    delta_type: React.PropTypes.string.isRequired,
    action: React.PropTypes.string.isRequired,
  }),
};

CredTransaction.defaultProps = {
  credTransaction: {},
};
export default CredTransaction;
