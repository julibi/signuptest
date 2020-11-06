import { SIGNUP_START, SIGNUP_SUCCESS, SIGNOUT, SIGNUP_ERROR } from './constants';

const initialState = {
    disabled: false,
    loggedIn: false,
    error: null
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP_START:
      return {
        disabled: true,
        loggedIn: false,
        error: null
      };
    case SIGNUP_SUCCESS:
      return {
        // disable on Load DONE
        // on Server error show DONE
        // onSuccess - write the data to the localStorage
          // a) through redux
          // b) through local state DONE
        // refactor - make form a component
        // onSuccess - empty the form and route to a different route where you can log out
        // what happens on signup - route it somewhere? react router…

        // understand all the DISPATCHES of Redux - go over Redux again
        // understand context
        // understand hooks and self made hook
        // understand HOC
        name: action.payload.name,
        email: action.payload.email,
        disabled: true,
        loggedIn: true,
        error: null
      };
    case SIGNOUT:
      return initialState;
    case SIGNUP_ERROR:
      return {
        disabled: false,
        loggedIn: false,
        error: action.payload
      };
    default: 
      return initialState;
  }
};

export default userReducer;