import API from '../lib/api';
import {signup} from './actionsTypes';

function request() {
  return {
    type: signup.SIGNUP_REQUEST,
    loading: true
  }
}

function success() {
  return {
    type: signup.SIGNUP_SUCCESS,
    loading: false
  }
}

function failure() {
  return {
    type: signup.SIGNUP_FAILURE,
    loading: false
  }
}

export default function action(data) {
  return dispatch => {
    dispatch(request())
    return API.post('/users', { users: data })
      .then(json =>{
        dispatch(success())}
      ).catch(error => {
        dispatch(failure())
      });
  }
}
