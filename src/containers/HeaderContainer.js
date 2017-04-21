import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';
import bigolcrown from '../assets/images/bigolcrown.png';

const HeaderContainer = props => (
  <nav className="navbar">
    <div className="row">
      <div className="col-md-6 align-items-center">
        <img className="crown" src={bigolcrown} alt="crown" />
        <a className="navbar-brand" href="www.google.com">Charlotte Junior Devs</a>
      </div>
      <div className="col-md-6">
        <Account picture={props.picture} credibility={props.credibility} />
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
