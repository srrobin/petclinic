/* eslint-disable max-len */
import axios from "axios";

// const BASE_URL = "https://fake-server-6d3v.onrender.com";
const BASE_URL = "http://localhost:5000/";
export const AxiosInstance = axios.create({ baseURL: BASE_URL });

export async function fetchOwner({ signal }) {
  const response = await AxiosInstance.get("/petclinic", { signal });
  return response.data;
}

export async function detailsOwner({ signal, id }) {
  const response = await AxiosInstance.get(`/petclinic/${id}`, { signal });
  return response.data;
}

export async function createOwner(createOwner) {
  const response = await AxiosInstance.post("/petclinic", createOwner);
  return response.data;
}
// export async function updateOwner(updateOwner) {
//   const response = await AxiosInstance.put(`/petclinic/${updateOwner.id}`, updateOwner);
//   return response.data;
// }
export async function updateOwner(updateOwnerData) {
  const { id, name, email, phone, address, city, status } = updateOwnerData; // Destructure fields to update
  const response = await AxiosInstance.put(`/petclinic/${id}`, {
    name,
    email,
    phone,
    address,
    city,
    status,
    pets: updateOwnerData.pets // Include the pets array in the request data
  });
  return response.data; // Return updated owner data
}
export async function deleteData(id) {
  const response = await AxiosInstance.delete(`/petclinic/${id}`);
  return response.data;
}
