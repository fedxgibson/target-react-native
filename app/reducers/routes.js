import { ActionConst } from 'react-native-router-flux';
import { signup as SignupConst } from '../actions/actionsTypes';

const initialState = {
  scene: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene,
      };
    default:
      return state;
  }
}
