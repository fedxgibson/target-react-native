import LoginActions from '../actions/signup';

const login = (state = {}, action) => {
  switch (action.type) {
    case LoginActions.LOGIN_REQUEST:
      return {
        ...state,
      }
    case LoginActions.LOGIN_SUCCESS:
      return {
        ...state,
      }
    case LoginActions.LOGIN_FAILURE:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default login;
