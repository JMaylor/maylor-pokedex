import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const searchURL = "https://pokeapi.co/api/v2/pokemon/?limit=721";
const detailsURL = "https://pokeapi.co/api/v2/pokemon/";

export default new Vuex.Store({
  state: {
    currentPokemon: {},
    pokemonArray: [],
    filteredPokemon: [],
    typeFilter: "",
    query: "",
    view: "list",
  },
  mutations: {
    //   synchronous

    setFilteredPokemon(state, query) {
      state.filteredPokemon = state.pokemonArray.filter((x) =>
        x.name.includes(query.toLowerCase())
      );
    },

    setTypeFilter(state, type) {
      if (state.typeFilter == type) {
        state.typeFilter = "";
      } else {
        state.typeFilter = type;
      }
    },

    filterByType(state, query) {
      if (state.typeFilter == "") {
        state.filteredPokemon = state.pokemonArray.filter((x) =>
          x.name.includes(query.toLowerCase())
        );
      } else {
        state.filteredPokemon = state.pokemonArray.filter(
          (x) => x.name.includes(query) && x.types.includes(state.typeFilter)
        );
      }
    },

    setPokemonArray(state, array) {
      state.pokemonArray = array;
    },
    setCurrentPokemon(state, pokemon) {
      state.currentPokemon = pokemon;
    },
    setQuery(state, query) {
      state.query = query.toLowerCase();
    },
    setView(state, view) {
      state.view = view;
    },
  },
  actions: {
    //   asynchronous

    // function to run at start - gets all the pokemon ID, names and types.
    async searchPokemon(state) {
      const pokeList = await fetch(searchURL);
      const list = await pokeList.json();
      let pokeArray = [];

      Promise.all(
        list.results.map((pokemon) =>
          fetch(detailsURL + pokemon.name).then((response) => response.json())
        )
      ).then((pokemonDetails) => {
        pokemonDetails.forEach((detailsObj) => {
          pokeArray.push({
            id: detailsObj.id,
            name: detailsObj.name,
            types: detailsObj.types.map((entry) => entry.type.name),
          });
        });
      });
      state.commit("setPokemonArray", pokeArray);
      state.commit("setFilteredPokemon", "");
    },

    async setCurrentPokemon(state, pokemonName) {
      await fetch(detailsURL + pokemonName)
        .then((response) => response.json())
        .then((pokemon) => {
          pokemon.stats.forEach((statistic) => {
            switch (statistic.stat.name) {
              case "attack":
                statistic.variant = "primary";
                break;
              case "hp":
                statistic.variant = "danger";
                break;
              case "defense":
                statistic.variant = "warning";
                break;
              case "special-attack":
                statistic.variant = "info";
                break;
              case "special-defense":
                statistic.variant = "success";
                break;
              case "speed":
                statistic.variant = "secondary";
                break;
            }
          });
          state.commit("setCurrentPokemon", pokemon);
          state.commit("setView", "single");
        });
    },
  },
  modules: {},
  getters: {
    getCurrentPokemon: (state) => state.currentPokemon,
    getPokemonArray: (state) => state.pokemonArray,
	 getFilteredPokemon: (state) => state.filteredPokemon,
	 getTypeFilter: (state) => state.typeFilter,
    getQuery: (state) => state.query,
    getView: (state) => state.view,
  },
});
