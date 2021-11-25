import { Dispatch } from 'redux'
import { PROCESSCLIENTCODE ,GET_PROCESSCLIENT } from "../../interfaces/processClient";
import { getAPIprocessClient} from './../../api/apiclient';
import { toast } from 'react-toastify';



export const getApiProcess = (token: string) => async(dispatch: Dispatch<PROCESSCLIENTCODE>) => {
  try {

   const res = await getAPIprocessClient(token)
   console.log(res)
    dispatch({
      type: GET_PROCESSCLIENT,
      payload: res
    })

  
 } catch (err: any) {
   
  return   toast.error(err.message)
 }
}