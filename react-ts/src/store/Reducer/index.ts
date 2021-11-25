

import { combineReducers } from 'redux';
import AtmReducer from './atm.reducer';
import ProcessClientReducer from './processClient.reducer'
import Listqueue from './queue.reducer'
const myReducer = combineReducers({
    AtmReducer,
    Listqueue,
     ProcessClientReducer
});

export default myReducer;