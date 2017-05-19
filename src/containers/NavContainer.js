import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as accountActions from '../actions/account-actions';
import Avatar from '../components/Avatar';
import bigolcrown from '../assets/images/bigolcrown.png';

const NavContainer = props => (
  <nav className="navbar">
    <div className="container">
      <div className="row">
        <div className="col-md-6 brand">
          <img className="crown" src={bigolcrown} alt="crown" />
          <Link to="/" className="brandName">
            Charlotte Junior Devs
          </Link>
        </div>
        <div className="col-md-6">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/challenges">Challenges</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
            </li>
            {
              props.isAuthenticated &&
                <li className="nav-item">
                  <Link to="/settings">Account</Link>
                </li>
            }
            <li className="nav-item">
              <a
                className="nav-link"
                href="//charlottejuniordevs.github.io/faq"
                target="_blank"
                rel="noopener noreferrer"
              >
                FAQ
              </a>
            </li>
            {
              props.isAuthenticated &&
                <li className="nav-item">
                  <Link to={`/users/${window.localStorage.getItem('id')}`} className="accountLink">
                    <Avatar picture={props.picture} credibility={props.credibility} />
                  </Link>
                </li>
            }
            <li className="nav-item">
              {
                props.isAuthenticated ?
                  <button className="btn btn-primary" onClick={() => props.destroySession()}>
                    Sign Out
                  </button>
                  :
                  <form action="/login">
                    <button className="btn btn-primary">Sign In</button>
                  </form>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

function mapStateToProps(state) {
  return {
    picture: state.account.picture,
    credibility: state.account.credibility,
    isAuthenticated: state.account.isAuthenticated,
  };
}

NavContainer.propTypes = {
  credibility: React.PropTypes.string.isRequired,
  destroySession: React.PropTypes.func.isRequired,
  picture: React.PropTypes.string.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, accountActions)(NavContainer);
