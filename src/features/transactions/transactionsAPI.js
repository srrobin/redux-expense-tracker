import { axiosInstance } from "../../utils/axios"

export const  getTrans =  async () => {
    const res = await axiosInstance.get("/transactions");
    return res.data;
};

export const  addTrans =  async (data) => {
    const res = await axiosInstance.post("/transactions", data);
    return res.data;
}


export const  editTrans =  async (id,data) => {
    const res = await axiosInstance.put(`/transactions/${id}`, data);
    return res.data;
}


export const  deleteTrans =  async (id) => {
    const res = await axiosInstance.delete(`/transactions/${id}`);
    return res.data;
}