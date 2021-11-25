import { Dispatch } from "redux";
import {
  PROCESSCLIENTCODE,
  GET_PROCESSCLIENT,
} from "../../interfaces/processClient";
import { getApiProcessClient } from "./../../api/apiclient";
import { toast } from "react-toastify";

export const getApiProcess =
  (token: string) => async (dispatch: Dispatch<PROCESSCLIENTCODE>) => {
    try {
      const res = await getApiProcessClient(token);

      dispatch({
        type: GET_PROCESSCLIENT,
        payload: res,
      });
    } catch (err: any) {
      return toast.error(err.message);
    }
  };
