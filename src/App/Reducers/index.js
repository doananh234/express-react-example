import { combineReducers } from 'redux';
import login from './LoginReducer';
import app from './AppReducer';
export default combineReducers({
  login,
  app
});
