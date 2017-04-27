import { combineReducers } from 'redux';
import challengesReducer from './challenges-reducer';
import accountReducer from './account-reducer';

const rootReducer = combineReducers({
  challenges: challengesReducer,
  account: accountReducer,
});

export default rootReducer;
