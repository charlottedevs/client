import * as types from '../actions/action-types';

const tokenExists = () => 'auth_token' in window.localStorage;

const INITIAL_STATE = {
  isAuthenticated: tokenExists(),
  picture: window.localStorage.getItem('picture') || '',
  credibility: window.localStorage.getItem('credibility') || '',
  account: {
    resume_site_url: '',
    linkedin_url: '',
    stackoverflow_url: '',
    twitter_handle: '',
    github_handle: '',
    codewars_handle: '',
  },
  successfulUpdate: false,
  credTransactions: [],
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

const destroySesion = () => {
  window.localStorage.clear();
  return { ...INITIAL_STATE, isAuthenticated: false };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_SESSION:
      return createSession(action.payload, state);
    case types.DESTROY_SESSION:
      return destroySesion();
    case types.FETCH_ACCOUNT:
      return { ...state, account: action.payload, successfulUpdate: false, responseStatus: 200 };
    case types.UPDATE_FIELD:
      return {
        ...state,
        account: {
          ...state.account,
          [action.payload.key]: action.payload.target,
        },
      };
    case types.UPDATE_ACCOUNT:
      return { ...state, account: action.payload, successfulUpdate: true };
    case types.FETCH_CRED_TRANSACTIONS:
      return { ...state, credTransactions: action.payload };
    case types.NETWORK_ERROR:
      return { ...state, responseStatus: action.payload.response.status };
    default:
      return state;
  }
};

