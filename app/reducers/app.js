import { app as appConst } from '../actions/actionsTypes';

const app = (state = { isLoading: false}, action) => {
  switch (action.type) {
    case appConst.APP_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case appConst.APP_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case appConst.APP_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

export default app;
