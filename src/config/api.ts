// const DEV_URL = "http://192.168.1.94:8080";
const DEV_URL = "http://192.168.1.3:8080";


export const API_CONFIG = {
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? DEV_URL,
};