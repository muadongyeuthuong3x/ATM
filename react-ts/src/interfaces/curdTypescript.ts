
import { ATM } from './typescript'

export const CREATE_ATM = 'CREATE_ATM'
export const GET_ATM = 'GET_ATM'

export interface CREATATM{
    type: typeof CREATE_ATM
    payload:ATM
  }
  
  export interface GETATM{
    type: typeof GET_ATM 
    payload: ATM[]
  }

  
  export type ATMTYPECODE = CREATATM|GETATM