import { signup, login } from '../actions/actionsTypes';


const user = (state = {}, action) => {
  switch (action.type) {
    case signup.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.data
      }
    case login.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data
      }
    default:
      return state
  }
}

export default user;
