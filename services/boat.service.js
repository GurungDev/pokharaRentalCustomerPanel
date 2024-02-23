import http from "@/lib/https.utils";

export const getAllBoatList = async ({data})=> {
    const res = await http.get("/customer/boat/", {data})
    return res?.data;
}

export const getOneBoat= async (data)=> {
    const res = await http.get(`customer/boat/${data}`)
    return res?.data;
}


