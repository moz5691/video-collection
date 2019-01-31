// import videos from '../api/videos';
import history from '../history';
import axios from 'axios';

import {
  CREATE_VIDEO,
  FETCH_VIDEO,
  FETCH_VIDEOS,
  EDIT_VIDEO,
  DELETE_VIDEO,
  SIGN_IN,
  SIGN_OUT,
  SET_SELECTED,
  SET_VIDEOS
} from './types';

export const setSelected = (video) => {
  return {
    type: SET_SELECTED,
    payload: video
  }
}

export const setVideos = (videos) => {
  return {
    type: SET_VIDEOS,
    payload: videos
  }
}



export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}



export const createVideo = (formValues) => {
  return async (dispatch, getState)=> {
    const {userId} = getState().auth;
    const response = await axios.post('/api/videos', {...formValues, userId});
    console.log('post', response)
    dispatch({type: CREATE_VIDEO, payload: response.data});
    history.push('/videos');
  }
}

export const deleteVideo = (id) => {
  return async (dispatch) => {
    console.log('id', id)
    const response = await axios.delete(`/api/videos/${id}`);
    console.log('delete', response);
    dispatch({type: DELETE_VIDEO, payload: id});
    history.push('/videos');
  }

}

export const fetchVideos = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/videos')
    console.log('fetch videos', response)
    dispatch({type: FETCH_VIDEOS, payload: response.data})
  }

}

export const fetchVideo = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/videos/${id}`)
    console.log('fetch', response.data)
    dispatch({type: FETCH_VIDEO, payload: response.data})
  }

}

export const editVideo = (id, formValues) => {
  return async (dispatch) => {
    const response = await axios.patch(`/api/videos/${id}`, formValues);
    dispatch({type: EDIT_VIDEO, payload: response.data})
    history.push('/videos');
  }

}

