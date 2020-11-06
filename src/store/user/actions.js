import { fakeLogin } from '../../fakeLogin';

export const SIGNUP = (user) => async(dispatch, getState) => {
  dispatch({ type: 'SIGNUP_START' });
  try {
    await fakeLogin();
    return dispatch({ type: 'SIGNUP_SUCCESS', payload: user });
  } catch (error) {
    return dispatch({ type: 'SIGNUP_ERROR', payload: error });
  }
};

export const SIGNOUT = () => ({
  type: 'SIGNOUT'
});

