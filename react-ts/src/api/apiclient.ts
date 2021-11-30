import axios from "./apiConfigHeader";
import { toast } from "react-toastify";

export const postApi = async (nameATM: string) => {
  const name = {
    name: nameATM,
  };


  const res = await axios.post("/api/v1/atms", name )
  return res.data;
};

export const getApi = async () => {
  const res = await axios.get("/api/v1/atms")

  return res.data.atm;
};

export const getApiProcessClient = async () => {
  const res = await axios.get("/api/v1/atms/processClient" );

  return res.data;
};

export const getApiDeleteAtm = async (id: string) => {
  try {
    const res = await axios.delete(`/api/v1/atms/${id}`);
    toast.success("Xoa thanh cong");
  } catch (err: any) {
    return toast.error(err.message);
  }
};

export const postApiCreatePeople = async ( namePeople: string, transaction: number) => {
  const datapeople = {
    namePeople,
    transaction,
  };
  try {
    const res = await axios.post('/api/v1/atms/people',  datapeople);
    toast.success(res.data.message);
  } catch (err: any) {
    return toast.error(err.message);
  }
};

export const getApiQueue = async () => {
  try {
    const res = await axios.get("/api/v1/atms/queue")
    return res.data.queue;
  } catch (err: any) {
    return toast.error(err.message);
  }
};
