import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as challengeActions from '../actions/challenge-actions';
import Layout from '../Layout';
import ChallengesList from '../components/ChallengesList';

class ChallengesContainer extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.fetchChallenges();
    }
  }

  render() {
    const challenges = this.props.challenges;

    return (
      <Layout>
        <div className="jumbotron">
          <h2>Challenges</h2>
          <ChallengesList challenges={challenges} />
        </div>
      </Layout>
    );
  }
}

ChallengesContainer.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape).isRequired,
  fetchChallenges: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    challenges: state.challenges.challenges,
    isAuthenticated: state.account.isAuthenticated,
  };
}


export default connect(mapStateToProps, challengeActions)(ChallengesContainer);
