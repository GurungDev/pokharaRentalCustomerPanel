import http from "@/lib/https.utils";

export const makeOrder= async (data)=> {
    const res = await http.post(`/customer/order`, data)
    return res?.data;
}

export const getEsewaToken= async (data)=> {
    const res = await http.post(`/customer/order/esewa/init`, data)
    return res?.data;
}