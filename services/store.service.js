import http from "@/lib/https.utils";

export const getAllStoreList = async ()=> {
    const res = await http.get("/customer/store/")
    return res?.data;
}

export const getOneStore= async (data)=> {
    const res = await http.get(`/customer/store/${data}`) 
    return res?.data;
}

export const getFollowedStore= async (data)=> {
    const res = await http.get(`/customer/subscriber`) 
    return res?.data;
}
 
 