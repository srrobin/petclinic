import axios from "axios";

// const BASE_URL = "https://fake-server-6d3v.onrender.com";
const BASE_URL = "http://localhost:5000";
export const AxiosInstance = axios.create({ baseURL: BASE_URL });
