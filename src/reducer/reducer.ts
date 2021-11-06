import { combineReducers } from 'redux';
import { appReducer } from './app/app';
import { dataReducer } from './data/data';

export default combineReducers({
  data: dataReducer,
  app: appReducer,
});
