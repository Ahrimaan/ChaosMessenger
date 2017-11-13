import { combineReducers } from 'redux';
import authReducer from './reducer_authentication';
import firebaseReducer from './reducer_firebase';

const rootReducer = combineReducers({
  profile: authReducer,
  firebase: firebaseReducer
});

export default rootReducer;
