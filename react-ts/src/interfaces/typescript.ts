import { ChangeEvent, FormEvent } from 'react'
import myReducer from './../store/Reducer/index'
export type InputChange = ChangeEvent<
  | HTMLInputElement 
  | HTMLTextAreaElement 
  | HTMLSelectElement
>

export type FormSubmit = FormEvent<HTMLFormElement>


export interface Registerts {
  email:string
  password:string
}


export  interface ATM {
  client: string;
  id: string;
  name:  string;
  status:  string;
  transaction:number;
  remove:boolean;
}


export interface token {
  token:string
}

export interface process {
  processedClient?:string
}
export interface queue{
  transaction:string,
  name:string
}

export type RootStore = ReturnType<typeof myReducer>