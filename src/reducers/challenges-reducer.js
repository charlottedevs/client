import * as types from '../actions/action-types';

const INITIAL_STATE = {
  challenges: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CHALLENGES:
      return { ...state, challenges: action.payload };
    default:
      return state;
  }
};
