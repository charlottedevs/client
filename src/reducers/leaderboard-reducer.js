import * as types from '../actions/action-types';

const INITIAL_STATE = {
  standings: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_LEADERBOARD:
      return { ...state, standings: action.payload };
    default:
      return state;
  }
};
