import { connect } from 'react-redux';
import LoginAction from '../../actions/login';
import Landing from '../../components/Landing';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitLogin: (data) => {
      console.log(data)
      // dispatch(LoginAction(data))
    }
  }
}

const container = connect(
  null,
  mapDispatchToProps
)(Landing)

export default container;
