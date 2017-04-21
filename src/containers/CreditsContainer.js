import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as creditActions from '../actions/credit-actions';
import CreditsList from '../components/CreditsList';
import CreditInput from '../components/CreditInput';

class CreditsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCredit: 'foo',
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.fetchCredits();
    }
  }

  render() {
    const credits = this.props.credits;
    const selectedCredit = this.props.selectedCredit;

    return (
      <div className="jumbotron">
        <h2>Challenges</h2>
        <CreditsList credits={credits} selectCredit={this.props.selectCredit} />
        <CreditInput selectedCredit={selectedCredit} />
      </div>

    );
  }
}

CreditsContainer.propTypes = {
  credits: PropTypes.arrayOf(PropTypes.shape).isRequired,
  selectedCredit: PropTypes.shape({
    title: PropTypes.string,
    points: PropTypes.number,
    description: PropTypes.string,
  }),
  fetchCredits: PropTypes.func.isRequired,
  selectCredit: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

CreditsContainer.defaultProps = {
  selectedCredit: {},
};

function mapStateToProps(state) {
  return {
    credits: state.credits.credits,
    isAuthenticated: state.account.isAuthenticated,
  };
}


export default connect(mapStateToProps, creditActions)(CreditsContainer);
