// import React, {PropTypes, Component} from 'react';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as creditActions from '../actions/credit-actions';

class CreditInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventInfo: {}
    };

    this.onSubmitEventClick = this.onSubmitEventClick.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
  }

  handleInfoChange(e) {
    this.setState(
      { eventInfo:  {
          url: e.target.value
        }
      }
    )
  }



  onSubmitEventClick(e) {
    const credit = this.props.selectedCredit;

    if (Object.keys(credit).length === 0) {
      return
    } else {
      const eventParams =   {
        event: {
          category: credit.name,
          user_id:  1, // todo
          info:    this.state.eventInfo
        }
      }

      this.props.createEvent(eventParams)
    }
  }

  render() {
    const selectedCredit = this.props.selectedCredit;
      return (
      <div>
        <hr/>
        <p>{selectedCredit.title}</p>
        <p>{selectedCredit.points}</p>
        <input id="url" type="text" placeholder="url" onChange={this.handleInfoChange} />
        <button className="btn btn-primary" onClick={this.onSubmitEventClick}>Submit</button>
      </div>
      );
  }
}

// CreditInput.propTypes = {
//   submitCredit: PropTypes.func.isRequired
// };

export default connect(null, creditActions)(CreditInput);
