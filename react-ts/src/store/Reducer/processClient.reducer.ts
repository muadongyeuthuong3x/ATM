import * as types from "./../../interfaces/processClient";
import {process} from './../../interfaces/typescript';

const data = {
  processedClient : ""
}
const ProcessClientReducer = ( state: process = data  , action: types.PROCESSCLIENTCODE ): process=> {
  
    switch (action.type) {
     
    case types.GET_PROCESSCLIENT:
         return  action.payload
      default:
        return state;
    }

  }




  export default ProcessClientReducer;