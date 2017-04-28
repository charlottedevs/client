import { combineReducers } from 'redux';
import challengesReducer from './challenges-reducer';
import accountReducer from './account-reducer';
import reposReducer from './repos-reducer';

const rootReducer = combineReducers({
  challenges: challengesReducer,
  repos: reposReducer,
  account: accountReducer,
});

export default rootReducer;
