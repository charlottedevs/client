import * as types from '../actions/action-types';

const storeJWTToken = (token, state) => {
  window.localStorage.setItem('auth_token', token);
  const foo = { ...state, isAuthenticated: true };
  return foo;
};

const INITIAL_STATE = {
  isAuthenticated: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_SESSION:
      return storeJWTToken(action.payload, state);
    default:
      return state;
  }
};

