

import { Dispatch } from "redux";
import {  accessTokenConfig } from '../../api/configApi'
import {loginApi , registerApi } from "./../../api/authApi";
import { toast } from "react-toastify";
import {AUTHHOME} from '../../interfaces/authReponse'
import { IAlertType ,ALERT
} from '../../interfaces/loadding'

export const loginHome = (email:string , password:string) =>
  async (dispatch: Dispatch<AUTHHOME>) => {
    try {
      const res = await loginApi(email,password);
      accessTokenConfig(res.data.PRIVATE_TOKEN)

    localStorage.setItem("tokenhome",res.data.PRIVATE_TOKEN)

    localStorage.setItem("emailhome",res.data.user.email)
    
      if (res.data.user) {
        accessTokenConfig(res.data.PRIVATE_TOKEN)
    } else {
        toast.error(res.data.message)
    }
     


    } catch (err: any) {
      return toast.error(err.message);
    }
  };


  export const registerHome = (email:string , password:string) =>
  async (dispatch: Dispatch<AUTHHOME>) => {
    try {
      const res = await  registerApi(email,password);
      accessTokenConfig(res.data.PRIVATE_TOKEN)

    localStorage.setItem("tokenhome",res.data.PRIVATE_TOKEN)
    localStorage.setItem("emailhome",res.data.user.email)
    
      if (res.data.user) {
        accessTokenConfig(res.data.PRIVATE_TOKEN)
    } else {
        toast.error(res.data.message)
    }


    } catch (err: any) {
      return toast.error(err.message);
    }
  };


  export const logOut = () =>
  async (dispatch: Dispatch<IAlertType|AUTHHOME>) => {
    localStorage.removeItem("tokenhome");
    localStorage.removeItem("emailhome");
    dispatch({ type: ALERT, payload: { loadding: true } })
    }



