import { createStore ,applyMiddleware } from 'redux';
import myReducer from './Reducer/index';
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(
    myReducer,
    composeWithDevTools(applyMiddleware(thunk))

);


export default store;