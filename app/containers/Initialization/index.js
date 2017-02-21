import { connect } from 'react-redux';
import LoginAction from '../../actions/login';
import Initialization from '../../components/Initialization';

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
)(Initialization)

export default container;
