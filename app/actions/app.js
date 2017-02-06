import { app } from './actionsTypes';

export const appActions = {
  request() {
    return {
      type: app.APP_REQUEST
    }
  },

  success() {
    return {
      type: app.APP_SUCCESS
    }
  },

  failure() {
    return {
      type: app.APP_FAILURE
    }
  },
}
