export const GET_QUEUE ='GET_QUEUE'

import { queue }  from './typescript'

export interface QUEUECode{

    type: typeof GET_QUEUE,
    payload: queue[]
  }

  export type LISTQUEUE = QUEUECode