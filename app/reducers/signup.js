import SignupActions from '../actions/signup';

const signup = (state = {}, action) => {
  switch (action.type) {
    case SignupActions.SIGNUP_REQUEST:
      debugger;
      return {
        ...state,
      }
    case SignupActions.SIGNUP_SUCCESS:
      return {
        ...state,
      }
    case SignupActions.SIGNUP_FAILURE:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default signup;
