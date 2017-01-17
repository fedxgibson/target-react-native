import LoginActions from '../actions/signup';

const login = (state = {}, action) => {
  switch (action.type) {
    case LoginActions.LOGIN_REQUEST:
      debugger;
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
