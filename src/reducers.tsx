import { combineReducers } from 'redux';
import { usersReducer } from './components/User';

export default combineReducers({
  user: usersReducer,
});
