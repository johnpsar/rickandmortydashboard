//import the createStore object from Vuex
import { createStore } from "vuex";
// Import axios to make HTTP requests
import axios from "axios";
import { Character } from "../types";
import CharacterService from "../services/CharacterService";

function setCharacters(commit: any, response: any) {
  commit("SET_CHARACTERS", response.data);
  commit("SET_LOADING", false);
}
//todo pagination in vuex so when i go back i return to the page i was not to page 1
export default createStore({
  state: {
    characters: [],
    loading: false,
    error: null,
    page: 1,
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
    SET_PAGE(state, page) {
      state.page = page;
    },
    INCREASE_PAGE(state) {
      state.page = state.page + 1;
    },
    DECREASE_PAGE(state) {
      state.page = state.page - 1;
    },
  },
  actions: {
    getCharacters({ commit, state }) {
      commit("SET_LOADING", true);
      CharacterService.getPaginatedCharacters(state.page)
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
    page: (state) => {
      return state.page;
    },
  },
});
