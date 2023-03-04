import axios from "axios";
import { Character } from "../types";
export default {
  getCharacter(id: number) {
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  },
  getPaginatedCharacters(page: number) {
    return axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
  },
};
