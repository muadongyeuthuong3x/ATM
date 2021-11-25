import * as types from "./../../interfaces/queue";
import {queue} from './../../interfaces/typescript';


const Listqueue = (
    state: queue[] =[] , action: types.LISTQUEUE
  ): queue[] => {
  
    switch (action.type) {
     
    case types.GET_QUEUE:
         return action.payload
      default:
        return state;
    }

  }




  export default Listqueue;