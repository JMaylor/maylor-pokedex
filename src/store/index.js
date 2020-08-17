import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const searchURL = 'https://pokeapi.co/api/v2/pokemon/?limit=893'
const detailsURL = 'https://pokeapi.co/api/v2/pokemon/'

export default new Vuex.Store({
  state: {
	  currentPokemon: {},
	  pokemonArray: [],
	  query: '',
	  view: 'list'
  },
  mutations: {
	//   synchronous
	setCurrentPokemon(state, pokemon) {
		state.currentPokemon = pokemon;
	},
	setPokemonArray(state, array) {
		state.pokemonArray = array;
	},
	setQuery(state, query) {
		state.query = query;
	},
	setView(state, view) {
		state.view = view;
	}
  },
  actions: {
	//   asynchronous
	async searchPokemon(state, query) {
		const pokeList = await fetch(searchURL);
		const list = await pokeList.json();
		const names = list.results.map(x => x.name);
		const filteredNames = names.filter(name => name.includes(query)).sort();
		state.commit('setPokemonArray', filteredNames);
	},
	async getPokemonDetails(state, pokemon) {
		const pokeDetails = await fetch(detailsURL + pokemon);
		const details = await pokeDetails.json();
		details.stats.forEach(statistic => {
			switch(statistic.stat.name) {
				case 'attack':
					statistic.variant='primary';
					break;
				case 'hp':
					statistic.variant='danger';
					break;
				case 'defense':
					statistic.variant='warning';
					break;
				case 'special-attack':
					statistic.variant="info";
					break;
				case 'special-defense':
					statistic.variant="success";
					break;
				case 'speed':
					statistic.variant="secondary";
					break;
			};
		})
		
		state.commit('setCurrentPokemon', details);
		state.commit("setView", "single");
	},
  },
  modules: {},
  getters: {
	  getCurrentPokemon: state => state.currentPokemon,
	  getPokemonArray: state => state.pokemonArray,
	  getQuery: state => state.query,
	  getView: state => state.view,
  }
});