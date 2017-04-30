import * as types from '../actions/action-types';

const INITIAL_STATE = {
  repos: [{ name: 'credibility', path: '' }],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_REPOS:
      return { ...state, repos: [...INITIAL_STATE.repos, ...action.payload] };
    default:
      return state;
  }
};
