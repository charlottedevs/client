import * as types from '../actions/action-types';


const storeJWTToken = (token, state) => {
  window.localStorage.setItem("auth_token", token);
  return state;
}

const INITIAL_STATE = {
  authorized: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_SESSION:
      return storeJWTToken(action.payload, state)
    default:
      return state;
  }
};

