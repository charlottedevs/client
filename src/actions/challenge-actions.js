import axios from 'axios';
import './common';
import {
  FETCH_CHALLENGES,
  FETCH_REPOS,
  NETWORK_ERROR,
} from './action-types';

export const fetchChallenges = repo => (
  (dispatch) => {
    axios({ url: `challenges?repo=${repo}` })
      .then(response => dispatch({ type: FETCH_CHALLENGES, payload: response.data.challenges }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  }
);

export const fetchRepos = () => (
  (dispatch) => {
    axios({ url: 'repos' })
      .then(response => dispatch({ type: FETCH_REPOS, payload: response.data.repos }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  }
);

export const changeRepo = fetchChallenges;
