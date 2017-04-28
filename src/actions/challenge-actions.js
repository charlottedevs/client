import axios from 'axios';
import {
  FETCH_CHALLENGES,
  FETCH_REPOS,
  NETWORK_ERROR,
} from './action-types';

// TODO: common config:
// https://github.com/mzabriskie/axios#global-axios-defaults
//
const requestConfig = (endpoint) => {
  const apiUrl = process.env.API_URL;
  const challengesUrl = `${apiUrl}/${endpoint}`;

  const jwt = window.localStorage.getItem('auth_token');
  const authHeaders = { Authorization: `Bearer ${jwt}` };
  return { url: challengesUrl, headers: authHeaders };
};

export const fetchChallenges = repo => (
  (dispatch) => {
    axios(requestConfig(`challenges?repo=${repo}`))
      .then(response => dispatch({ type: FETCH_CHALLENGES, payload: response.data.challenges }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  }
);

export const fetchRepos = () => (
  (dispatch) => {
    axios(requestConfig('repos'))
      .then(response => dispatch({ type: FETCH_REPOS, payload: response.data.repos }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  }
);

export const changeRepo = fetchChallenges;
