import axios from "axios";
import { Episode } from "../types";
export default {
  getEpisode(url: string) {
    return axios.get(url);
  },
};
