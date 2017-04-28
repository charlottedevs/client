import * as types from '../actions/action-types';

const INITIAL_STATE = {
  challenges: [],
  categories: [],
  selectedChallenge: {},
  currentCategory: '',
};

const handleFetchChallenges = (state, payload) => {
  const categories = [...new Set(payload.map(el => el.repo.split('/')[1]))];
  return { ...state, challenges: payload, categories, currentCategory: categories[0] };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CHALLENGES:
      return handleFetchChallenges(state, action.payload);
    case types.CATEGORY_CHANGE:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
};
