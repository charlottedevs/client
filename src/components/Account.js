import React, { PropTypes } from 'react';

const Account = ({ picture, credibility }) => (
  <div>
    <img className="profilePic" src={picture} alt="" />
    <p className="credibility">{credibility}</p>
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
