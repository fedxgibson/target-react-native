import API from '../lib/api';
import { signup } from './actionsTypes';
import { appActions } from './app';

function request() {
  return {
    type: signup.SIGNUP_REQUEST,
  }
}

function success(data) {
  return {
    type: signup.SIGNUP_SUCCESS,
    data: data
  }
}

function failure() {
  return {
    type: signup.SIGNUP_FAILURE,
  }
}

export default function action(data) {
  return dispatch => {
    dispatch(request());
    dispatch(appActions.request());

    return API.post('users', { user: data })
      .then(data =>{
        dispatch(success(data));
        dispatch(appActions.success());
      }).catch(error => {
        dispatch(failure());
        dispatch(appActions.failure());
      });
  }
}
