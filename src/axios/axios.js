import { axios } from "axios";
import { apiBaseUrl } from "../Constants/constant";

const instance = axios.create({
    baseURL: apiBaseUrl,
  });

export default instance;