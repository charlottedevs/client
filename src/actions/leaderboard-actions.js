import axios from 'axios';
import './jwt';
import {
  FETCH_LEADERBOARD,
  NETWORK_ERROR,
} from './action-types';

export const fetchLeaderboard = () => (
  (dispatch) => {
    axios({ url: 'credibility' })
      .then(response => dispatch({ type: FETCH_LEADERBOARD, payload: response.data.users }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  }
);
