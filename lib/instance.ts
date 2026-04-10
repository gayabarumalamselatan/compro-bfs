import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: `/api`,
  headers: headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  (config) => {
    console.log("Request", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
