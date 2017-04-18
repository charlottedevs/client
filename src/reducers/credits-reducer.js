import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_CREDIT:
      return [...state, Object.assign({}, action.credit)];
    default:
      return state;
  }
};
