import React from 'react';
import { Button } from 'react-bootstrap';

const isCurrentAccount = account => (
  account.id && account.id.toString() === window.localStorage.getItem('id')
);
const AccountCard = ({ account }) => (
  <div className="card accountCard">
    <div className="row">
      <div className="col-md-6 userInfo">
        <img src={account.picture} alt="avatar" className="accountAvatar" />
        <h2>{account.first_name} {account.last_name}</h2>
        {
          isCurrentAccount(account) &&
          <Button
            bsStyle="primary"
            className="btn btn-secondary"
            href="/settings"
          >
            Settings
          </Button>
        }
      </div>
      <div className="col-md-6 accountInfo">
        <p className="credibility">{account.credibility}<span className="uom">pts</span></p>
        <p >Github: <a href={`https://github.com/${account.github_handle}`} rel="noopener noreferrer" target="_blank">{account.github_handle}</a></p>
        <p >LinkedIn: <a href={`https://www.linkedin.com/in/${account.linkedin_url}/`}>{account.linkedin_url}</a></p>
        <p >Resume Site: <a href={account.resume_site_url}>{account.resume_site_url}</a></p>
        <p >StackOverflow: <a href={account.stackoverflow_url}>{account.stackoverflow_url}</a></p>
        <p >Twitter: <a href={`https://twitter.com/${account.twitter_handle}`}>{account.twitter_handle}</a></p>
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
