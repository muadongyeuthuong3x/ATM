import axios from "axios"
import { API_URL } from "./configApi"
import {Registerts ,Login }  from '../interfaces/typescript'
export const loginApi = async (email:string , password:string) => {
    const data = {
        email,
        password
    }
    const response = await axios.post(`${API_URL}api/v1/auth/login`, data)
    return response;
}

export const registerApi = async (email:string , password:string) => {
    const data = {
        email,
        password
    }
    const response = await axios.post(`${API_URL}api/v1/auth/register`, data)
    return response;
}

