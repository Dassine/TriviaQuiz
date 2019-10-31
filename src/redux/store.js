import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const middle = [reduxPromise, reduxThunk];

export default createStore(reducers, applyMiddleware(...middle));
