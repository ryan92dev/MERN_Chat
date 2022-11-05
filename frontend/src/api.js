import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      const parsedToken = JSON.parse(token);
      config.headers.Authorization = `Bearer ${parsedToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const registerApi = async (payload) => {
  const response = await apiClient.post("/auth/register", payload);
  return response.data;
};

export const loginApi = async (payload) => {
  const response = await apiClient.post("/auth/login", payload);
  return response.data;
};

// secure routes

// const checkResponseCode = (exception) => {
//   const responseCode = exception?.response?.status;

//   if (responseCode) {
//     (responseCode === 401 || responseCode === 403) && logout();
//   }
// };
