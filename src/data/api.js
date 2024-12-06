// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5002",
//   // baseURL:"https://cravings-backend-9kit.onrender.com",

//   // baseURL:"https://cravings-backend-o8sk.onrender.com",

//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": localStorage.getItem("token")
//       ? `Bearer ${localStorage.getItem("token")}`
//       : null,
//   },
// });

// export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5002", // Adjust base URL as needed
  // baseURL:"https://cravings-backend-9kit.onrender.com",

//   // baseURL:"https://cravings-backend-o8sk.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Dynamically get the token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("Request Headers:", config.headers);
  return config;
}, (error) => {
  // Handle errors during request setup
  return Promise.reject(error);
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle token expiry (e.g., log out the user)
      console.error("Token expired, redirecting to login...");
      localStorage.removeItem("token");
      window.location.href = "/signin"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default api;
