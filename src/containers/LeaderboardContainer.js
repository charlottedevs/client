import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as leaderboardActions from '../actions/leaderboard-actions';
import Standings from '../components/Standings';

class LeaderboardContainer extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.fetchLeaderboard();
    }
  }

  render() {
    const standings = this.props.standings;

    return (
      <div>
        <div className="jumbotron leaderboardJumbo">
          <h2>Leaderboard</h2>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <Standings standings={standings} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LeaderboardContainer.propTypes = {
  standings: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
  fetchLeaderboard: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    standings: state.leaderboard.standings,
    isAuthenticated: state.account.isAuthenticated,
  };
}


export default connect(mapStateToProps, leaderboardActions)(LeaderboardContainer);
