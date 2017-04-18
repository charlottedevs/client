import {
  FETCH_CREDITS,
} from '../actions/action-types';

const INITIAL_STATE = {
  credits: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CREDITS:
      return { ...state, credits: action.payload };
    default:
      return state;
  }
};
