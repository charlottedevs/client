import { combineReducers } from 'redux';
import creditsReducer from './credits-reducer';
import accountReducer from './account-reducer';

const rootReducer = combineReducers({
  credits: creditsReducer,
  accounts: accountReducer,
});

export default rootReducer;
