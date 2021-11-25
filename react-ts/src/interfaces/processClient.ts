export const GET_PROCESSCLIENT = "GET_PROCESSCLIENT";

import { process } from "./typescript";

export interface PROCESSCLIENT {
  type: typeof GET_PROCESSCLIENT;
  payload: process;
}

export type PROCESSCLIENTCODE = PROCESSCLIENT;
