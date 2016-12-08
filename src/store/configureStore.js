import { createStore, combineReducers } from 'redux';

import counterReducer from '../reducers/counterReducer';

const Reducers = combineReducers({
    counterReducer
})

export default createStore(Reducers);