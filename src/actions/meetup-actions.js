import axios from 'axios';
import './common';
import {
  FETCH_TODAYS_MEETUP,
  CREATE_ATTENDANCE,
  NETWORK_ERROR,
} from './action-types';

export const fetchTodaysMeetup = () => (
  (dispatch) => {
    axios({ url: '/attendance/new' })
      .then(response => dispatch({ type: FETCH_TODAYS_MEETUP, payload: response.data.meetup }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  }
);

export const checkinMeetup = (params) => {
  const requestConfig = {
    method: 'post',
    url: '/attendance',
    data: params,
  };

  return (dispatch) => {
    axios(requestConfig)
      .then(response => dispatch({ type: CREATE_ATTENDANCE, payload: response.data.event }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  };
};
