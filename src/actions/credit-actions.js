import axios from 'axios';
import {
  CREATE_EVENT,
  FETCH_CREDITS,
  NETWORK_ERROR,
  SELECT_CREDIT
} from './action-types';

export const fetchCredits = () => {
  const apiUrl = process.env.API_URL
  const creditsUrl = `${apiUrl}/credits`;

  const jwt = window.localStorage.getItem("auth_token")
  const authHeaders = { 'Authorization': 'Bearer ' + jwt };
  const requestConfig = {
    url: creditsUrl,
    headers: authHeaders
  }

  return (dispatch) => {
    axios(requestConfig)
      .then(response => dispatch({type: FETCH_CREDITS, payload: response.data.credits}))
      .catch(error => dispatch({type: NETWORK_ERROR, payload: error}))
  }
}

export const selectCredit = (credit) => {
  return({type: SELECT_CREDIT, payload: credit})
}

export const createEvent = params => {
  // TODO: common config:
  // https://github.com/mzabriskie/axios#global-axios-defaults
  //
  const apiUrl = process.env.API_URL
  const creditsUrl = `${apiUrl}/events`;

  const jwt = window.localStorage.getItem("auth_token")
  const authHeaders = { 'Authorization': 'Bearer ' + jwt };
  const requestConfig = {
    method: 'post',
    url: creditsUrl,
    headers: authHeaders,
    data: params
  }

  return (dispatch) => {
    axios(requestConfig)
      .then(response => dispatch({type: CREATE_EVENT}))
      .catch(error => dispatch({type: NETWORK_ERROR, payload: error}))
  }
}
