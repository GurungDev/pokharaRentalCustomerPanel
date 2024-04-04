import http from "@/lib/https.utils";

export const makeOrder= async (data)=> {
    const res = await http.post(`/customer/order`, data)
    return res?.data;
}

export const makeEsewaOrder= async (data)=> {
    const res = await http.post(`/customer/order/esewa`, data)
    return res?.data;
}


export const makeKhaltiOrder= async (data)=> {
     const res = await http.post(`/customer/order/khalti`, data)
    return res?.data;
}


export const getEsewaToken= async (data)=> {
    const res = await http.post(`/customer/order/esewa/init`, data)
    return res?.data;
}

export const getKhaltiToken= async (data)=> {
    const res = await http.post(`/customer/order/khalti/init`, data)
    return res?.data;
}


export const getOrders = async(data)=>{
    const res = await http.get(`/customer/order`, {params: data})
    return res?.data;
}