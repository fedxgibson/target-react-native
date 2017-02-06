import API from '../lib/api';
import { login } from './actionsTypes';
import { appActions } from './app';

function request() {
  return {
    type: login.LOGIN_REQUEST
  }
}

function success(data) {
  return {
    type: login.LOGIN_SUCCESS,
    data
  }
}

function failure() {
  return {
    type: login.LOGIN_FAILURE
  }
}

export default function action(data) {
  return dispatch => {
    dispatch(request());
    dispatch(appActions.request());
    return API.post('users/sign_in', { user: data })
      .then(json => {
        dispatch(success(json));
        dispatch(appActions.success());
      }
      ).catch(error => {
        dispatch(failure());
        dispatch(appActions.failure());
      });
  }
}
