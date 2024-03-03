/* eslint-disable */

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rolling-api.vercel.app/4-12/",
});

export default axiosInstance;
