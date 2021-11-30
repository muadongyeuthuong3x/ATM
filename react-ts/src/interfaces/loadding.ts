export const ALERT = "ALERT"
import { loaddingData } from './typescript'
export interface IAlertType {
    type: typeof ALERT,
  payload:loaddingData
}
