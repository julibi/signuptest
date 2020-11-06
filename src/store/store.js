import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './user/reducer';

const reducers = combineReducers({
  user: userReducer
});

const store = createStore(
  reducers,
  // REDUX DEV TOOLS + THUNK EXTENSION ENABLER.
  composeWithDevTools(applyMiddleware(...[thunkMiddleware])),
);

export default store;
