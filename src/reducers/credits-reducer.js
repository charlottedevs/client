import * as types from '../actions/action-types';

const INITIAL_STATE = {
  credits: [],
  selectedCredit: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CREDITS:
      return { ...state, credits: action.payload };
    case types.SELECT_CREDIT:
      return { ...state, selectedCredit: action.payload };
    default:
      return state;
  }
};
