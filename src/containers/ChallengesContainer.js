import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as challengeActions from '../actions/challenge-actions';
import ChallengesList from '../components/ChallengesList';
import ReposList from '../components/ReposList';

class ChallengesContainer extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
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
        {
          challenges.length > 0 ? (
            <div className="container challengesContainer">
              <ChallengesList challenges={challenges} />
            </div>
          ) : (
            <h3 style={{ textAlign: 'center' }}>Click on a repo above to start!</h3>
          )
        }
      </div>
    );
  }
}

ChallengesContainer.propTypes = {
  challenges: React.PropTypes.arrayOf(React.PropTypes.shape),
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
