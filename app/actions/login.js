import API from '../lib/api';
import { login } from './actionsTypes';

function request() {
  return {
    type: login.LOGIN_REQUEST,
    loading: true
  }
}

function success() {
  return {
    type: login.LOGIN_SUCCESS,
    loading: false
  }
}

function failure() {
  return {
    type: login.LOGIN_FAILURE,
    loading: false
  }
}

export default function action(data) {
  return dispatch => {
    dispatch(request())
    return API.post('/users', { user: data })
      .then(json => {
        dispatch(success())}
      ).catch(error => {
        dispatch(failure())
      });
  }
}
