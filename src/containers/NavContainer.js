import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as accountActions from '../actions/account-actions';
import Avatar from '../components/Avatar';
import bigolcrown from '../assets/images/bigolcrown.png';

const NavContainer = props => (
  <nav className="navbar">
    <div className="row">
      <div className="col-md-6 align-items-center">
        <img className="crown" src={bigolcrown} alt="crown" />
        <Link to="/" className="navbar-brand">
          Charlotte Junior Devs
        </Link>
      </div>
      <div className="col-md-6">
        {
          props.isAuthenticated ?
            <button className="btn btn-primary" onClick={() => props.destroySession()}>
              Sign Out
            </button>
          :
            <button className="btn btn-primary"><Link to="/login">Sign In</Link></button>
        }
        <Link to="/challenges">Challenges</Link>
        <Link to="/account">
          <Avatar picture={props.picture} credibility={props.credibility} />
        </Link>
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
  credibility: React.PropTypes.number.isRequired,
  destroySession: React.PropTypes.func.isRequired,
  picture: React.PropTypes.string.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, accountActions)(NavContainer);
