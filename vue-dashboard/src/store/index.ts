//import the createStore object from Vuex
import { createStore } from "vuex";
// Import axios to make HTTP requests
import axios from "axios";
export default createStore({
  state: {
    characters: [],
  },
  getters: {
    getCharacters: (state) => state.characters,
  },
  actions: {
    async fetchCharacters({ commit }) {
      try {
        const data = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        commit("SET_CHARACTERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
  },
});
