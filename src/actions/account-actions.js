import axios from 'axios';
import {
  CREATE_SESSION,
  NETWORK_ERROR,
  DESTROY_SESSION,
} from './action-types';

export const createSession = (googleOauthJWT) => {
  const apiUrl = process.env.API_URL;
  const sessionUrl = `${apiUrl}/session`;
  const authHeaders = { Authorization: `Bearer ${googleOauthJWT}` };
  const requestConfig = {
    method: 'post',
    url: sessionUrl,
    headers: authHeaders,
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

