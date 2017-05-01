import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as challengeActions from '../actions/challenge-actions';
import ChallengesList from '../components/ChallengesList';
import ReposList from '../components/ReposList';

class ChallengesContainer extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.fetchChallenges('');
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
  challenges: React.PropTypes.arrayOf(React.PropTypes.shape),
  fetchChallenges: React.PropTypes.func.isRequired,
  fetchRepos: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  changeRepo: React.PropTypes.func.isRequired,
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
};

function mapStateToProps(state) {
  return {
    repos: state.repos.repos,
    challenges: state.challenges.challenges,
    isAuthenticated: state.account.isAuthenticated,
  };
}


export default connect(mapStateToProps, challengeActions)(ChallengesContainer);
