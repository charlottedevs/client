import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as challengeActions from '../actions/challenge-actions';
import MeetupCheckinForm from '../components/MeetupCheckinForm';

class MeetupCheckinContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ip: '',
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      axios.get('http://checkip.amazonaws.com/')
        .then((res) => {
          const ip = res.data.replace('\n', '');
          this.setState({ ip });
        });
    }
  }

  handleChange(event) {
    this.setState(
      {
        ...this.state,
        verificationCode: event.target.value,
      },
    );
  }

  handleSubmit() {
    return this.props.isAuthenticated; // submit
  }

  render() {
    const ip = this.state.ip;

    return (
      <MeetupCheckinForm
        ip={ip}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        verificationCode={this.state.verificationCode}
      />
    );
  }
}

MeetupCheckinContainer.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
};


function mapStateToProps(state) {
  return {
    isAuthenticated: state.account.isAuthenticated,
  };
}


export default connect(mapStateToProps, challengeActions)(MeetupCheckinContainer);
