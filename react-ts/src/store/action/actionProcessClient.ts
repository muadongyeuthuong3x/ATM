import { Dispatch } from "redux";
import {
  PROCESSCLIENTCODE,
  GET_PROCESSCLIENT,
} from "../../interfaces/processClient";
import { IAlertType ,ALERT
 } from '../../interfaces/loadding'
import { getApiProcessClient } from "./../../api/apiclient";
import { toast } from "react-toastify";

export const getApiProcess = () => async (dispatch: Dispatch<PROCESSCLIENTCODE>) => {
    try {
      
      const res = await getApiProcessClient();
      dispatch({
        type: GET_PROCESSCLIENT,
        payload: res,
      });
  
    } catch (err: any) {
      return toast.error(err.message);
    }
  };
