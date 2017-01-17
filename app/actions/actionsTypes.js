import mirrorCreator from 'mirror-creator';


function createActionSet(action) {
  var set = ['REQUEST', 'SUCCESS', 'FAILURE'];
  return set.map((e) => {
    return `${action}_${e}`;
  })
}

export const signup = mirrorCreator(createActionSet('SIGNUP'));
export const login = mirrorCreator(createActionSet('LOGIN'));
