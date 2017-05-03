import React from 'react';

const AccountCard = ({ account }) => (
  <div className="card accountCard">
    <div className="row">
      <div className="col-md-6 userInfo">
        <img src={account.picture} alt="avatar" className="accountAvatar" />
        <h2>{account.first_name} {account.last_name}</h2>
      </div>
      <div className="col-md-6 accountInfo">

        <p className="credibility">{account.credibility}pts</p>
      </div>
    </div>

  </div>
);

AccountCard.propTypes = {
  account: React.PropTypes.shape({
    id: React.PropTypes.number,
    first_name: React.PropTypes.string,
    last_name: React.PropTypes.string,
    picture: React.PropTypes.string,
    credibility: React.PropTypes.number,
    github_handle: React.PropTypes.string,
    linkedin_url: React.PropTypes.string,
    resume_site_url: React.PropTypes.string,
    stackoverflow_url: React.PropTypes.string,
    twitter_handle: React.PropTypes.string,
  }).isRequired,
};

export default AccountCard;
