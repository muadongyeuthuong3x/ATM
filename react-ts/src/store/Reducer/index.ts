import { combineReducers } from "redux";
import AtmReducer from "./atm.reducer";
import ProcessClientReducer from "./processClient.reducer";
import Listqueue from "./queue.reducer";
import LoadingReducer from './loadding'
const myReducer = combineReducers({
  AtmReducer,
  Listqueue,
  ProcessClientReducer,
  LoadingReducer
});





export default myReducer;
