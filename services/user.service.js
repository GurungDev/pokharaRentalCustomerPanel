import http from "@/lib/https.utils";

export const getNotification = async ({data})=> {
    console.log("i ama here")
    const res = await http.get("/customer/notification/", {data})
    return res?.data;
}

 