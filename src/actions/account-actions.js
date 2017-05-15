import axios from 'axios';
import './jwt';
import {
  CREATE_SESSION,
  NETWORK_ERROR,
  DESTROY_SESSION,
  FETCH_ACCOUNT,
  UPDATE_ACCOUNT,
  UPDATE_FIELD,
  FETCH_CRED_TRANSACTIONS,
  FETCH_SETTINGS,
} from './action-types';

export const createSession = (googleOauthJWT) => {
  window.localStorage.setItem('auth_token', googleOauthJWT);
  const sessionUrl = '/session';
  const requestConfig = {
    method: 'post',
    url: sessionUrl,
  };

  return (dispatch) => {
    axios(requestConfig)
      .then(response => dispatch({ type: CREATE_SESSION, payload: response.data.user_info }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  };
};

export const destroySession = () => {
  window.localStorage.clear();
  return ({ type: DESTROY_SESSION });
};

export const fetchAccount = userId => (
  (dispatch) => {
    axios.get(userId ? `/users/${userId}` : '/settings')
      .then(response => dispatch({ type: FETCH_ACCOUNT, payload: response.data.user }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  }
);

export const fetchSettings = () => (
  (dispatch) => {
    axios.get('/settings')
      .then(response => dispatch({ type: FETCH_SETTINGS, payload: response.data.user }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  }
);

export const updateAccount = (params) => {
  const requestConfig = {
    method: 'put',
    url: '/settings',
    data: { user: params },
  };

  return (dispatch) => {
    axios(requestConfig)
      .then(response => dispatch({ type: UPDATE_ACCOUNT, payload: response.data.user }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  };
};

export const updateField = (key, target) => (
  { type: UPDATE_FIELD, payload: { key, target } }
);

export const fetchCredTransactions = userId => (
  (dispatch) => {
    axios.get(`/users/${userId}/cred_transactions`)
      .then(response =>
        dispatch({ type: FETCH_CRED_TRANSACTIONS, payload: response.data.cred_transactions }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  }
);
