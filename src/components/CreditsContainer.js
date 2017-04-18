import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as creditActions from '../actions/credit-actions';
import CreditsList from './CreditsList';

class CreditsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credits: []
    };
  }

  render() {
    const {credits} = this.props;

    return (
      <div>
        <CreditsList credits={credits} />
      </div>
    );
  }
}

CreditsContainer.propTypes = {
  credits: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    credits: state.credits
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(creditActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditsContainer);
