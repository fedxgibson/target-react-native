import { connect } from 'react-redux';
import LoginAction from '../../actions/login';
import Landing from '../../components/Landing';

const mapStateToProps = (store) => {
  return {
    user: store.user.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitLogin: (data) => {
      dispatch(LoginAction(data))
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)

export default container;
