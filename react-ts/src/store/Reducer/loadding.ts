import * as types from "./../../interfaces/loadding";
import { IAlertType } from "./../../interfaces/loadding";
import {loaddingData} from "./../../interfaces/typescript"
const data ={
    loadding:true
}
const LoadingReducer = (
  state: loaddingData=data,
  action: types.IAlertType
): loaddingData => {
  switch (action.type) {
    case types.ALERT :
     return  action.payload
    default:
      return state;
  }
};

export default LoadingReducer;