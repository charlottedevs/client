import { combineReducers } from 'redux';
import credits from './credits-reducer';
import account from './account-reducer';

const rootReducer = combineReducers({
  credits,
  account,
});

export default rootReducer;
