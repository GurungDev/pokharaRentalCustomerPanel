import http from "@/lib/https.utils";

export const getAllStoreList = async (data) => {
  const res = await http.get("/customer/store/", { params: data });
  return res?.data;
};

export const getOneStore = async (data) => {
  const res = await http.get(`/customer/store/${data}`);
  return res?.data;
};

export const getIsFollowed = async (data) => {
  const res = await http.get(`/customer/subscriber/${data}/isfollowed`);
  return res?.data;
};

export const getFollowedStore = async (data) => {
  const res = await http.get(`/customer/subscriber`);
  return res?.data;
};

export const followStore = async (data) => {
  const res = await http.post(`/customer/subscriber/${data}/follow`);
  return res?.data;
};

export const unfollowStore = async (data) => {
  const res = await http.post(`/customer/subscriber/${data}/unfollow`);
  return res?.data;
};
