import axios from "axios";

export const BASE_URL = "http://localhost:5500/api/v1";

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const URL = {
  // auth
  // AUTH_LOGIN: "/auth/login",
  // AUTH_REGISTER: "/auth/register",
  // PROGRAM_LIST: "/program",
  // PROGRAM_CREATE: "/program/add",
};
