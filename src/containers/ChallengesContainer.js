/* eslint-disable */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as challengeActions from '../actions/challenge-actions';
import ChallengesList from '../components/ChallengesList';
import ReposList from '../components/ReposList';

class ChallengesContainer extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.fetchChallenges(this.props.currentRepo);
      this.props.fetchRepos();
    }
  }

  render() {
    const challenges = this.props.challenges;
    const repos = this.props.repos;
    const changeRepo = this.props.changeRepo;

    return (
      <div>
        <div className="jumbotron challengeJumbo">
          <h2>Challenges</h2>
          <ReposList repos={repos} changeRepo={changeRepo} />
        </div>
        <div className="container ">
          <ChallengesList challenges={challenges} />
        </div>
      </div>
    );
  }
}

ChallengesContainer.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape),
  fetchChallenges: PropTypes.func.isRequired,
  fetchRepos: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  changeRepo: React.PropTypes.func.isRequired,
  currentRepo: React.PropTypes.string.isRequired,
  repos: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string,
      path: React.PropTypes.string,
    }),
  ),
};

ChallengesContainer.defaultProps = {
  repos: [],
  challenges: [],
}
function mapStateToProps(state) {
  return {
    repos: state.repos.repos,
    challenges: state.challenges.challenges,
    isAuthenticated: state.account.isAuthenticated,
    currentRepo: state.repos.currentRepo,
  };
}


export default connect(mapStateToProps, challengeActions)(ChallengesContainer);
