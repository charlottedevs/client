import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as challengeActions from '../actions/challenge-actions';

class ChallengeInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventInfo: {},
    };

    this.onSubmitEventClick = this.onSubmitEventClick.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
  }

  onSubmitEventClick() {
    const challenge = this.props.selectedChallenge;

    if (Object.keys(challenge).length === 0) {
      return;
    }
    const eventParams = {
      event: {
        category: challenge.name,
        user_id: 1, // todo
        info: this.state.eventInfo,
      },
    };

    this.props.createEvent(eventParams);
  }

  handleInfoChange(e) {
    this.setState(
      {
        eventInfo: { url: e.target.value },
      },
    );
  }

  render() {
    const selectedChallenge = this.props.selectedChallenge;
    return (
      <div>
        <hr />
        <p>{selectedChallenge.title}</p>
        <p>{selectedChallenge.points}</p>
        <input
          id="url" type="text" placeholder="url" onChange={this.handleInfoChange}
        />
        <button
          className="btn btn-primary" onClick={this.onSubmitEventClick}
        >
          Submit
        </button>
      </div>
    );
  }
}

ChallengeInput.propTypes = {
  selectedChallenge: PropTypes.shape({
    title: PropTypes.string,
    points: PropTypes.number,
    description: PropTypes.string,
  }),
  createEvent: PropTypes.func.isRequired,
};

ChallengeInput.defaultProps = {
  selectedChallenge: {},
};
export default connect(null, challengeActions)(ChallengeInput);
