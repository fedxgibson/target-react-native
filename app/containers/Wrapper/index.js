import { connect } from 'react-redux';
import Wrapper from '../../components/Wrapper';

const mapStateToProps = (store) => {
  return {
    user: store.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper)

export default container;
