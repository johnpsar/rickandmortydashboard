import axios from "axios";
import { Location } from "../types";
export default {
  getLocation(url: string) {
    return axios.get(url);
  },
};
