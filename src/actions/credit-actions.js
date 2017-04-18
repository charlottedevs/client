import axios from 'axios';
import {
  FETCH_CREDITS,
  NETWORK_ERROR
} from './action-types';

export const fetchCredits = () => {
  const apiUrl = process.env.API_URL
  const creditsUrl = `${apiUrl}/credits`;

  const jwt = process.env.API_TOKEN
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

