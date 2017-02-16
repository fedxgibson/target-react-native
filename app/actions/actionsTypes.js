import mirrorCreator from 'mirror-creator';

function createActionSet(action) {
  var set = ['REQUEST', 'SUCCESS', 'FAILURE'];
  return set.map((e) => {
    return `${action}_${e}`;
  })
}

export const signup = mirrorCreator(createActionSet('SIGNUP'));
export const login = mirrorCreator(createActionSet('LOGIN'));
export const app = mirrorCreator(createActionSet('APP'));
export const profile = mirrorCreator(createActionSet('PROFILE'));
export const logout = mirrorCreator(createActionSet('LOG_OUT'));
