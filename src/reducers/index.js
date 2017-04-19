import credits from './credits-reducer.js';
import account from './account-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  credits,
  account
});

export default rootReducer;
