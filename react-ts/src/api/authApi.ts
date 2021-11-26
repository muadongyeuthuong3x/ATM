import axios from "axios"
import { API_URL } from "./configApi"
import {Registerts ,Login }  from '../interfaces/typescript'
export const loginApi = async (input:Login) => {
    const response = await axios.post(`${API_URL}api/v1/auth/login`, input)
    return response;
}

export const registerApi = async (input:Registerts) => {
    const response = await axios.post(`${API_URL}api/v1/auth/register`, input)
    return response;
}

// export const authApi = async () => {
//     const response = await axios.get(`${API_URL}api/v1/auth`)
//     return response;
// }