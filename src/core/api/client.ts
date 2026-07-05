import axios from "axios";
import { ENV } from "../../config/env";
import logger from "../logger/logger";

const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 8000,
});

api.interceptors.request.use((config) => {
  logger.info("API Request", config.url);
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    logger.error("API Error", error);
    return Promise.reject(error);
  }
);

export default api;
