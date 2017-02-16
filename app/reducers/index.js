import { combineReducers } from 'redux'
import login from './login'
import routes from './routes'
import app from './app'
import user from './user'

import { reducer as form } from 'redux-form'

export default combineReducers({
  login,
  routes,
  form,
  app,
  user
})
