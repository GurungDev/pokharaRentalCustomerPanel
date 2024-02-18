import http from "@/lib/https.utils";

export const getAllBoatList = async ()=> {
    const res = await http.get("/customer/boat/")
    return res?.data;
}

export const getOneBoat= async (data)=> {
    const res = await http.get(`customer/boat/${data}`)
    return res?.data;
}

 