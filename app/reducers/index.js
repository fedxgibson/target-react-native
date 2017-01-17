import { combineReducers } from 'redux'
import signup from './signup'
import login from './login'
import routes from './routes'
import { reducer as form } from 'redux-form'

export default combineReducers({
  signup,
  login,
  routes,
  form
})
