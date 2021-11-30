import { ChangeEvent, FormEvent } from "react";
import myReducer from "./../store/Reducer/index";
export type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type FormSubmit = FormEvent<HTMLFormElement>;

export interface Registerts {
  email: string;
  password: string;
}

export interface Login extends Registerts {}



export interface ATM {
  client: string;
  id: string;
  name: string;
  status: string;
  transaction: number;
  remove: boolean;
}



export interface process {
  processedClient: string;
}
export interface queue {
  transaction: string;
  name: string;
}


export interface loaddingData {
 loadding:boolean
}



export interface auth {
  transaction: string;
  name: string;
}

export interface dataLogin{
  message:string,
  user:string,
  PRIVATE_TOKEN:string
}




export type RootStore = ReturnType<typeof myReducer>;
