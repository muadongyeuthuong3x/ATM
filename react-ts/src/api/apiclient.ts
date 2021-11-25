import axios from 'axios'
import { toast } from 'react-toastify';


export const postAPI = async ( nameATM: string, token:string) => {
    const name = {
     name: nameATM }
    
    const res = await axios.post("http://localhost:5000/api/v1/atms", name, {
        headers: {Authorization: `Bearer ${token}` }
    })
    return res.data;
  }

  export const getAPI = async (  token:string) => {
  
    const res = await axios.get("http://localhost:5000/api/v1/atms",  {
      headers: {Authorization: `Bearer ${token}` }
    })


    return res.data.atm;
  }

  export const getAPIprocessClient = async ( token:string) => {
  
    const res = await axios.get("http://localhost:5000/api/v1/atms/processClient",  {
      headers: {Authorization: `Bearer ${token}` }
    })
    console.log(typeof res.data)
    return res.data;
  }

  export const getAPIDELETEATM = async (id:string , token:string) => {
   
    try {
      const res = await axios.delete(`http://localhost:5000/api/v1/atms/${id}`,  {
      headers: {Authorization: `Bearer ${token}` }
    })
    toast.success("Xoa thanh cong")
    } catch (err:any) {
      return   toast.error(err.message)
    }
    
  }

  export const getAPICREATEPEOPLE = async ( namePeople:string , transaction:number , token:string) => {
    const datapeople = {
      namePeople,
      transaction
    }
    try {
      const res = await axios.post(`http://localhost:5000/api/v1/atms/people`, datapeople , {
      headers: {Authorization: `Bearer ${token}` }
    })
    toast.success(res.data.message)
    } catch (err:any) {
      return   toast.error(err.message)
    }
    
  }



  export const getAPIQUEUE = async (token:string) => {

    try {
      const res = await axios.get("http://localhost:5000/api/v1/atms/queue", {
      headers: {Authorization: `Bearer ${token}` }
    })
  
   return res.data.queue
    } catch (err:any) {
      return   toast.error(err.message)
    }
    
  }