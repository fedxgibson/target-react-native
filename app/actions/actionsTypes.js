import mirrorCreator from 'mirror-creator';

export const signup = mirrorCreator([
  'SIGNUP_REQUEST',
  'SIGNUP_SUCCESS',
  'SIGNUP_FAILURE',
]);
