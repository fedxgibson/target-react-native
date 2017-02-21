import { signup, login, logout } from '../actions/actionsTypes';


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
      case logout.LOG_OUT_SUCCESS:
        return {
          ...state,
          user: null
        }
    case "persist/REHYDRATE":
    debugger;
      return {
        ...state,
        user: action.payload.user.user
      }
    default:
      return state
  }
}

export default user;
