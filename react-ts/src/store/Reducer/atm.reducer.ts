import * as types from "./../../interfaces/curdTypescript";
import { ATM } from './../../interfaces/typescript';


const AtmReducer = (
    state: ATM[] = [], action: types.ATMTYPECODE
  ): ATM[] => {
    switch (action.type) {
    case types.CREATE_ATM:
        return action.payload
    case types.GET_ATM:
         return action.payload
      default:
        return state;
    }
  }

  export default AtmReducer;