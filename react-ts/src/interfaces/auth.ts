
import { dataLogin } from './typescript'

export const LOGIN_HOME = 'LOGIN_HOME'
export const GET_ATM = 'GET_ATM'

export interface LOGINHOME{
    type: typeof LOGIN_HOME,
    payload:dataLogin
  }
  

  
 // export type ATMTYPECODE = CREATATM|GETATM