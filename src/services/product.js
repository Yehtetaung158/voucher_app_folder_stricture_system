import { getCookie } from "react-use-cookie";

export const fetcher = (url) =>
  fetch(url, {
    headers: { Authorization: `Bearer ${getCookie("token")}` },
  }).then((res) => res.json());

export const createFetcher = async ({ products_name, price }) =>
  await fetch(import.meta.env.VITE_API_URL + "/products", {
    method: "POST",
    body: JSON.stringify({
      product_name: products_name,
      price: price,
      create_at: new Date().toISOString(),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });

export const deleteFetcher = async (id) =>
  await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getCookie("token")}` },
  });

export const productEdit = async (id, product_name, price) => {
  console.log(product_name);
  return await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify({
      product_name: product_name,
      price: price,
      create_at: new Date().toISOString(),
    }),
  });
};
