
import http from "@/lib/https.utils";

export const loginUser = async (data)=> {
 
    const res = await http.post("/auth/login", data)
    
    return res?.data;
}

export const getDetails = async ()=> {
    const res = await http.get("/customer/get-details")
    return res;
}

