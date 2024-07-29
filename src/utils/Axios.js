/* eslint-disable max-len */
import axios from "axios";

// const BASE_URL = "https://fake-server-6d3v.onrender.com";
const BASE_URL = "https://waiting-tangible-letter.glitch.me";
// const BASE_URL = "http://localhost:5000/";
export const AxiosInstance = axios.create({ baseURL: BASE_URL });

export async function fetchOwner({ signal }) {
  const response = await AxiosInstance.get("/petclinic", { signal });
  return response.data;
}

export async function detailsOwner({ signal, id }) {
  const response = await AxiosInstance.get(`/owners/${id}`, { signal });
  return response.data;
}

export async function createOwner(createOwner) {
  const response = await AxiosInstance.post("/owners", createOwner);
  return response.data;
}
// export async function updateOwner(updateOwner) {
//   const response = await AxiosInstance.put(`/petclinic/${updateOwner.id}`, updateOwner);
//   return response.data;
// }
export async function updateOwner(updateOwnerData) {
  const { id, name, email, phone, address, city, status } = updateOwnerData; // Destructure fields to update
  const response = await AxiosInstance.put(`/owners/${id}`, {
    name,
    email,
    phone,
    address,
    city,
    status,
    // pets: updateOwnerData.pets
  });
  return response.data;
}

export async function fetchPets({ signal }) {
  const response = await AxiosInstance.get("/pets", { signal });
  return response.data;
}
export async function createPet(createPet) {
  const response = await AxiosInstance.post("/pets", createPet);
  return response.data;
}

export async function detailsPet({ signal, id }) {
  const response = await AxiosInstance.get(`/pets/${id}`, { signal });
  return response.data;
}

export async function updateVisit(updatePetData) {
  const response = await AxiosInstance.put(`/pets/${updatePetData.id}`, updatePetData);
  console.log("🚀 ~ updatePet ~ response:", response.data);
  return response.data;
}

export async function updatePet(updatePetData) {
  // const { id, petname, birthday, species } = updatePetData;
  const response = await AxiosInstance.put(`/pets/${updatePetData.id}`, updatePetData);
  console.log("🚀 ~ updatePet ~ response:", response.data);
  return response.data;
}

// export async function createVisits(updatedVisits) {
//   const { id, ownerId, petname, species, birthday } = updatedVisits;
//   const response = await AxiosInstance.post(`/pets/${id}`, {
//     id,
//     ownerId,
//     petname,
//     species,
//     birthday,
//     visits: updatedVisits.visits
//   });
//   return response.data;
// }
export async function createVisits(petId, updatedVisits) {
  const { visits } = updatedVisits;
  const response = await AxiosInstance.post(`/pets/${petId}`, {
    visits
  });
  console.log("🚀 ~ updatePet ~ axios:", response.data);
  return response.data;
}
// {
//   "id": "105",
//   "ownerId": "1",
//   "petname": "New Max new up",
//   "species": "Dog",
//   "birthday": "2019-08-12",
//   "visits": [
//       {
//           "id": "1001",
//           "date": "2024-04-10",
//           "reason": "Annual checkup"
//       },
//       {
//           "id": "1002",
//           "date": "2024-02-15",
//           "reason": "Vaccination"
//       },
//       {
//           "id": "f5d03c20-d6a0-4356-bfa7-711ec01ead8a",
//           "date": "2024-04-21",
//           "reason": "good"
//       }
//   ]
// }
// export async function create(updateOwnerData) {
//   const { id, name, email, phone, address, city, status } = updateOwnerData;
//   const response = await AxiosInstance.put(`/petclinic/${id}`, {
//     name,
//     email,
//     phone,
//     address,
//     city,
//     status,
//     pets: updateOwnerData.pets
//   });
//   return response.data;
// }
export async function deleteData(id) {
  const response = await AxiosInstance.delete(`/petclinic/${id}`);
  return response.data;
}
