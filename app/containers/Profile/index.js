import { connect } from 'react-redux';
import ProfileAction from '../../actions/profile';
import UserLogout from '../../actions/logout';

import Profile from '../../components/Profile';


const mapStateToProps = (state) => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateProfile: (data) => {
      console.log(data);

      dispatch(ProfileAction(data))
    },
    onLogOut: (data) => {
      console.log(data);

      dispatch(UserLogout(data))
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default container;
