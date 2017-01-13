import { connect } from 'react-redux';
import SignupAction from '../../actions/signup';
import Signup from '../../components/Signup';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitLogin: (data) => {
      dispatch(SignupAction(data))
    }
  }
}

const container = connect(
  null,
  mapDispatchToProps
)(Signup)

export default container;
