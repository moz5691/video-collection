import { combineReducers } from 'redux';
import authReducer from './authReducer';
import videoReducer from "./videoReducer";
import searchReducer from './searchReducer';

export default combineReducers({
  auth: authReducer,
  videos: videoReducer,
  search: searchReducer
})