import API from '../lib/api';
import { profile } from './actionsTypes';
import { appActions } from './app';

function request() {
  return {
    type: profile.PROFILE_REQUEST,
  }
}

function success(data) {
  return {
    type: profile.PROFILE_SUCCESS,
    data
  }
}

function failure() {
  return {
    type: profile.PROFILE_FAILURE,
  }
}

export default function action(data) {
  return dispatch => {
    dispatch(request());
    dispatch(appActions.request());

    return API.put(`users/${data.user_id}`, { user: data })
      .then(data =>{
        dispatch(success(data));
        dispatch(appActions.success());
      }).catch(error => {
        dispatch(failure());
        dispatch(appActions.failure());
      });
  }
}
