import axios from 'axios';
import {
  CREATE_EVENT,
  FETCH_CHALLENGES,
  NETWORK_ERROR,
} from './action-types';

export const fetchChallenges = () => {
  const apiUrl = process.env.API_URL;
  const challengesUrl = `${apiUrl}/challenges`;

  const jwt = window.localStorage.getItem('auth_token');
  const authHeaders = { Authorization: `Bearer ${jwt}` };
  const requestConfig = {
    url: challengesUrl,
    headers: authHeaders,
  };

  return (dispatch) => {
    axios(requestConfig)
      .then(response => dispatch({ type: FETCH_CHALLENGES, payload: response.data.challenges }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  };
};

export const createEvent = (params) => {
  // TODO: common config:
  // https://github.com/mzabriskie/axios#global-axios-defaults
  //
  const apiUrl = process.env.API_URL;
  const challengesUrl = `${apiUrl}/events`;

  const jwt = window.localStorage.getItem('auth_token');
  const authHeaders = { Authorization: `Bearer ${jwt}` };
  const requestConfig = {
    method: 'post',
    url: challengesUrl,
    headers: authHeaders,
    data: params,
  };

  return (dispatch) => {
    axios(requestConfig)
      .then(response => dispatch({ type: CREATE_EVENT, payload: response.event }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  };
};
