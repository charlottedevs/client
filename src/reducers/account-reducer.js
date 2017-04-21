import * as types from '../actions/action-types';

const tokenExists = () => (
  window.localStorage.getItem('auth_token') !== null
);

const storeJWTToken = (token, state) => {
  window.localStorage.setItem('auth_token', token);
  return { ...state, isAuthenticated: tokenExists() };
};

const INITIAL_STATE = {
  isAuthenticated: tokenExists(),
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_SESSION:
      return storeJWTToken(action.payload, state);
    default:
      return state;
  }
};

