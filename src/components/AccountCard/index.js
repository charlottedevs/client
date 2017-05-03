import React from 'react';

const AccountCard = ({ account }) => (
  <div>
    <h5>This is the baseball card</h5>
    <p>first name: {account.first_name}</p>
    <p>last name: {account.last_name}</p>
    <p>credibility: {account.credibility}</p>
    <p>picture: {account.picture}</p>
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
