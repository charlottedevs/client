import React, { PropTypes } from 'react';

const Account = ({ picture, credibility }) => (
  <div>
    <img src={picture} alt="" />
    <p>{credibility}</p>
  </div>
);

Account.propTypes = {
  picture: PropTypes.string.isRequired,
  credibility: PropTypes.number,
};

Account.defaultProps = {
  credibility: null,
};

export default Account;
