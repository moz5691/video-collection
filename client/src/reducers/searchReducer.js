import {SET_SELECTED, SET_VIDEOS} from '../actions/types';

const INITIAL_STATE = {
  videos : [],
  selectedVideo: ''
}

export default (state= INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED:
      return { ...state, selectedVideo: action.payload}
    case SET_VIDEOS:
      return {...state, videos: action.payload}
    default:
      return state;
  }
}