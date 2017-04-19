import axios from 'axios';
import {
  CREATE_SESSION,
  NETWORK_ERROR,
} from './action-types';

const createSession = (jwt) => {
  const apiUrl = process.env.API_URL;
  const sessionUrl = `${apiUrl}/session`;
  const authHeaders = { Authorization: `Bearer ${jwt}` };
  const requestConfig = {
    method: 'post',
    url: sessionUrl,
    headers: authHeaders,
  };

  return (dispatch) => {
    axios(requestConfig)
      .then(response => dispatch({ type: CREATE_SESSION, payload: response.data.token }))
      .catch(error => dispatch({ type: NETWORK_ERROR, payload: error }));
  };
};

export default createSession;
