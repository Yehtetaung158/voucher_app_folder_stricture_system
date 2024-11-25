import { getCookie } from "react-use-cookie";

export const deleteFetcher = async (id) =>
  await fetch(`${import.meta.env.VITE_API_URL}/vouchers/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getCookie("token")}` },
  });

export const vousherFetcher = (url) =>
  fetch(url, {
    headers: { Authorization: `Bearer ${getCookie("token")}` },
  }).then((res) => res.json());
