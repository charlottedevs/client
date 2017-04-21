import * as types from '../actions/action-types';

const tokenExists = () => 'auth_token' in window.localStorage;

const INITIAL_STATE = {
  isAuthenticated: tokenExists(),
  picture: window.localStorage.getItem('picture') || '',
  credibility: null,
};

const persistInfoToLocalStorage = info => (
  Object.entries(info).forEach((arr) => {
    const key = arr[0];
    const value = arr[1];
    window.localStorage.setItem(key, value);
  })
);

const createSession = (info, state) => {
  persistInfoToLocalStorage(info);

  return {
    ...state,
    ...info,
    isAuthenticated: tokenExists(),
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_SESSION:
      return createSession(action.payload, state);
    default:
      return state;
  }
};

