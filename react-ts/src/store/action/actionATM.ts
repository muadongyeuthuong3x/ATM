import { Dispatch } from "redux";
import {
  CREATE_ATM,
  GET_ATM,
  ATMTYPECODE,
} from "../../interfaces/curdTypescript";
import { LISTQUEUE, GET_QUEUE } from "../../interfaces/queue";
import { postApi, getApi, getApiQueue } from "./../../api/apiclient";
import { toast } from "react-toastify";

export const createAtm =
  (nameAtm: string, token: string) =>
  async (dispatch: Dispatch<ATMTYPECODE>) => {
    try {
      const res = await postApi(nameAtm, token);

      dispatch({
        type: CREATE_ATM,
        payload: res,
      });
      toast.success("Tạo thành công ATM");
    } catch (err: any) {
      return toast.error(err.message);
    }
  };

export const getAtm =
  (token: string) => async (dispatch: Dispatch<ATMTYPECODE>) => {
    try {
      const res = await getApi(token);
      dispatch({
        type: GET_ATM,
        payload: res,
      });
    } catch (err: any) {
      return toast.error(err.message);
    }
  };

export const getQueue =
  (token: string) => async (dispatch: Dispatch<LISTQUEUE>) => {
    try {
      const res = await getApiQueue(token);
      dispatch({
        type: GET_QUEUE,
        payload: res,
      });
    } catch (err: any) {
      return toast.error(err.message);
    }
  };
