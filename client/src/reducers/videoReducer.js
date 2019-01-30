import _ from 'lodash';

import {
  FETCH_VIDEO,
  FETCH_VIDEOS,
  CREATE_VIDEO,
  EDIT_VIDEO,
  DELETE_VIDEO
} from "../actions/types";


export default (state={}, action) => {
  switch(action.type){
    case FETCH_VIDEO:

      return {...state, [action.payload._id]: action.payload};
     // return {...state, ..._.mapKeys(action.payload, '_id') }

    case CREATE_VIDEO:
      return {...state, [action.payload._id]: action.payload};
      // return {...state};
      //return null;
    case FETCH_VIDEOS:
      console.log('payload', action.payload);
      // return {...state, ..._.mapKeys(action.payload, '_id')}
      return {..._.mapKeys(action.payload, '_id')}

    case EDIT_VIDEO:
      return {...state, [action.payload._id]: action.payload};

    case DELETE_VIDEO:
      return _.omit(state, [action.payload]);

    default:
      return state;
  }
}