import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as creditActions from '../actions/credit-actions';

class CreditInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventInfo: {},
    };

    this.onSubmitEventClick = this.onSubmitEventClick.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
  }

  onSubmitEventClick() {
    const credit = this.props.selectedCredit;

    if (Object.keys(credit).length === 0) {
      return;
    }
    const eventParams = {
      event: {
        category: credit.name,
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
    const selectedCredit = this.props.selectedCredit;
    return (
      <div>
        <hr />
        <p>{selectedCredit.title}</p>
        <p>{selectedCredit.points}</p>
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

CreditInput.propTypes = {
  selectedCredit: PropTypes.shape({
    title: PropTypes.string,
    points: PropTypes.number,
    description: PropTypes.string,
  }),
  createEvent: PropTypes.func.isRequired,
};

CreditInput.defaultProps = {
  selectedCredit: {},
};
export default connect(null, creditActions)(CreditInput);
