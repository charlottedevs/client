import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as creditActions from '../actions/credit-actions';
import CreditsList from './CreditsList';
import CreditInput from './CreditInput';

class CreditsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCredit: 'foo'
    }
  }

  componentDidMount() {
    this.props.fetchCredits()
  }

  render() {
    const credits = this.props.credits;
    const selectedCredit = this.props.selectedCredit;

    return (
      <div>
        <CreditsList credits={credits} selectCredit={this.props.selectCredit} />
        <CreditInput selectedCredit={selectedCredit}/>
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
