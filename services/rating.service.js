import http from "@/lib/https.utils";

export const getTopRated= async ({ratingFor})=> {
    const res = await http.get(`/rate/top-rated?ratingFor=${ratingFor}`)
    return res?.data;
}
 