import { Dispatch } from "redux";
import {
  CREATE_ATM,
  GET_ATM,
  ATMTYPECODE,
} from "../../interfaces/curdTypescript";
import { IAlertType ,ALERT
} from '../../interfaces/loadding'
import { LISTQUEUE, GET_QUEUE } from "../../interfaces/queue";
import { postApi, getApi, getApiQueue } from "./../../api/apiclient";
import { toast } from "react-toastify";
export const createAtm =
  (nameAtm: string) =>
  async (dispatch: Dispatch<ATMTYPECODE>) => {
    try {
    
      const res = await postApi(nameAtm);
      dispatch({
        type: CREATE_ATM,
        payload: res,
      });
     
      toast.success("Tạo thành công ATM");
    } catch (err: any) {
      return toast.error(err.message);
    }
  };

export const getAtm =() => async (dispatch: Dispatch<IAlertType|ATMTYPECODE>) => {
    try {
      dispatch({ type: ALERT, payload: { loadding: true } })
      const res = await getApi();
      dispatch({
        type: GET_ATM,
        payload: res,
      });
    
    } catch (err: any) {
      return toast.error(err.message);
    }
  };

export const getQueue =
  () => async (dispatch: Dispatch<IAlertType|LISTQUEUE>) => {
    try {
     
      const res = await getApiQueue();
      dispatch({
        type: GET_QUEUE,
        payload: res,
      });
      dispatch({ type: ALERT, payload: { loadding: false } })
      
    } catch (err: any) {
      return toast.error(err.message);
    }
  };
