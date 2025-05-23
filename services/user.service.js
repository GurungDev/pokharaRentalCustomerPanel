import http from "@/lib/https.utils";

export const getNotification = async ({ data }) => {
  const res = await http.get("/customer/notification/", { data });
  return res?.data;
};

export const getDetails = async (data) => {
  const res = await http.get(`/customer/${data}`);
  return res?.data;
};

export const seenNotification = async ({ data }) => {
  const res = await http.post(
    `/customer/notification/seen/${data.notificationId}`
  );
  return res?.data;
};

export const updateProfile = async (data) => {
  const res = await http.patch(`/customer`, data);
  return res?.data;
};

export const contactAdmin = async (data) => {
  const res = await http.post(`/customer/contact`, data);
  return res?.data;
};
