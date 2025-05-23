import http from "@/lib/https.utils";

export const getAllcycleList = async ({data})=> {
    const res = await http.get("/customer/cycle/", {params: data})
    return res?.data;
}

export const getOnecycle= async (data)=> {
    const res = await http.get(`customer/cycle/${data}`) 
    return res?.data;
}
 