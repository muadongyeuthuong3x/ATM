import { Dispatch } from 'redux'
import {  CREATE_ATM,  GET_ATM   ,ATMTYPECODE  } from "../../interfaces/curdTypescript";
import {LISTQUEUE   , GET_QUEUE }   from "../../interfaces/queue";
import { postAPI  , getAPI , getAPIQUEUE} from './../../api/apiclient';
import { toast } from 'react-toastify';

export const createATM = (nameATM: string, token: string) =>  
async(dispatch: Dispatch<ATMTYPECODE>) => {
  try {

  const res = await postAPI( nameATM , token);

     dispatch({
       type: CREATE_ATM,
       payload: res
   })
   toast.success("Tạo thành công ATM")
 } catch (err: any) {
  return   toast.error(err.message)
 }
}

export const getATM = (token: string) => async(dispatch: Dispatch<ATMTYPECODE>) => {
  try {

   const res = await getAPI(token)
    dispatch({
      type: GET_ATM,
      payload: res
    })

  
 } catch (err: any) {
   
  return   toast.error(err.message)
 }
}

export const getQUEUE = (token: string) => async(dispatch: Dispatch<LISTQUEUE>) => {
  try {

   const res = await getAPIQUEUE(token)
    dispatch({
      type: GET_QUEUE,
      payload: res
    })

  
 } catch (err: any) {
   
  return   toast.error(err.message)
 }
}