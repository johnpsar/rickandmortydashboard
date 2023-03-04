//import the createStore object from Vuex
import { createStore } from "vuex";
// Import axios to make HTTP requests
import axios from "axios";
import { Character } from "../types";
import CharacterService from "../services/CharacterService";
// export default createStore({
//   state: {
//     characters: [],
//   },
//   getters: {
//     getCharacters: (state) => state.characters,
//   },
//   actions: {
//     async fetchCharacters({ commit }) {
//       try {
//         const data = await axios.get(
//           "https://rickandmortyapi.com/api/character"
//         );
//         commit("SET_CHARACTERS", data.data);
//       } catch (error) {
//         alert(error);
//         console.log(error);
//       }
//     },
//   },
//   mutations: {
//     SET_CHARACTERS(state, characters) {
//       state.characters = characters;
//     },
//   },
// });

function setCharacters(commit: any, response: any) {
  commit("SET_CHARACTERS", response.data);
  commit("SET_LOADING", false);
}
export default createStore({
  state: {
    characters: [],
    loading: false,
    error: null,
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    getCharacters({ commit }, page) {
      commit("SET_LOADING", true);
      CharacterService.getPaginatedCharacters(page)
        .then((response) => {
          setCharacters(commit, response);
        })
        .catch((error) => {
          commit("SET_LOADING", false);
          commit("SET_ERROR", error);
        });
    },
  },
  getters: {
    characters: (state) => {
      return state.characters;
    },
    loading: (state) => {
      return state.loading;
    },
  },
});
