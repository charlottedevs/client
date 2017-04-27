import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as challengeActions from '../actions/challenge-actions';
import ChallengesList from '../components/ChallengesList';
import ChallengeInput from '../components/ChallengeInput';

class ChallengesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChallenge: 'foo',
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.fetchChallenges();
    }
  }

  render() {
    const challenges = this.props.challenges;
    const selectedChallenge = this.props.selectedChallenge;

    return (
      <div className="jumbotron">
        <h2>Challenges</h2>
        <ChallengesList challenges={challenges} selectChallenge={this.props.selectChallenge} />
        <ChallengeInput selectedChallenge={selectedChallenge} />
      </div>

    );
  }
}

ChallengesContainer.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape).isRequired,
  selectedChallenge: PropTypes.shape({
    title: PropTypes.string,
    points: PropTypes.number,
    description: PropTypes.string,
  }),
  fetchChallenges: PropTypes.func.isRequired,
  selectChallenge: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

ChallengesContainer.defaultProps = {
  selectedChallenge: {},
};

function mapStateToProps(state) {
  return {
    challenges: state.challenges.challenges,
    isAuthenticated: state.account.isAuthenticated,
  };
}


export default connect(mapStateToProps, challengeActions)(ChallengesContainer);
