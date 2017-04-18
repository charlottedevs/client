import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as creditActions from '../actions/credit-actions';
import CreditsList from './CreditsList';

class CreditsContainer extends Component {
  componentDidMount() {
    this.props.fetchCredits()
  }

  render() {
    const credits = this.props.credits;

    return (
      <div>
        <CreditsList credits={credits} />
      </div>
    );
  }
}

CreditsContainer.propTypes = {
  credits: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return state.credits ;
}


export default connect(mapStateToProps, creditActions)(CreditsContainer);
