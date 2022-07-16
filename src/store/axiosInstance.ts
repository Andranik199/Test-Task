import axios from "axios";
import { config } from "../config";

export const apiInstance = axios.create({
  baseURL: config.be_base_url,
});
