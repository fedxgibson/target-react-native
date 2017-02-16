import API from '../lib/api';
import { logout } from './actionsTypes';
import { appActions } from './app';

function request() {
  return {
    type: logout.LOG_OUT_REQUEST,
  }
}

function success(data) {
  return {
    type: logout.LOG_OUT_SUCCESS,
    data
  }
}

function failure() {
  return {
    type: logout.LOG_OUT_FAILURE,
  }
}

export default function action(data) {
  return dispatch => {
    dispatch(request());
    dispatch(appActions.request());

    return API.delete('users/sign_out')
      .then(data =>{
        dispatch(success(data));
        dispatch(appActions.success());
      }).catch(error => {
        dispatch(failure());
        dispatch(appActions.failure());
      });
  }
}
