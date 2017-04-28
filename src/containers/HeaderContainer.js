import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import bigolcrown from '../assets/images/bigolcrown.png';

const HeaderContainer = props => (
  <nav className="navbar">
    <div className="row">
      <div className="col-md-6 align-items-center">
        <img className="crown" src={bigolcrown} alt="crown" />
        <Link to="/" className="navbar-brand">
          Charlotte Junior Devs
        </Link>
      </div>
      <div className="col-md-6">
        <Avatar picture={props.picture} credibility={props.credibility} />
      </div>
    </div>
  </nav>
);

function mapStateToProps(state) {
  return {
    picture: state.account.picture,
    credibility: state.account.credibility,
  };
}

HeaderContainer.propTypes = {
  picture: PropTypes.string.isRequired,
  credibility: PropTypes.number,
};

HeaderContainer.defaultProps = {
  credibility: null,
};

export default connect(mapStateToProps, null)(HeaderContainer);
