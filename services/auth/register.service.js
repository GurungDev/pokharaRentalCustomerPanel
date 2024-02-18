import http from "@/lib/https.utils";

export const Registeruser = async (data)=> {
 
    const res = await http.post("/auth/register/user", data)
    
    return res?.data;
}
