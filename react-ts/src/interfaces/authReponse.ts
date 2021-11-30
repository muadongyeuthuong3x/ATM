
import {dataLogin } from './typescript'

export const LOGIN_HOME = 'LOGIN_HOME'


export interface LOGINHOME{
    type: typeof LOGIN_HOME,
    payload:dataLogin
  }
  

  
 export type AUTHHOME = LOGINHOME