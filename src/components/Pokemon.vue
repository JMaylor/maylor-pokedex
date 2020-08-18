<template>
	<div>
		<b-container>
			<b-row v-if="typeFilter.length > 0"><b-button variant="outline-danger" @click="removeTypeFilter">type: {{ typeFilter }}</b-button></b-row>
			<b-row>
				<b-col v-for="pokemon in pokemonArray" :key="pokemon.id" cols="12" sm="6" md="4" lg="3" xl="2">
					<b-card style="height: 220px" class="my-2" :id="pokemon.name" @click="selectPokemon">
						<h6>
							<span style="font-size: 16px; font-style: italic; color: #bbb">#{{ pokemon.id }}</span>
						</h6>
						<h5>{{ pokemon.name.replace(pokemon.name.charAt(0), pokemon.name.charAt(0).toUpperCase()) }}</h5>
						<b-card-img-lazy
							style="max-height: 60%; max-width: 60%; width: auto; height: auto;"
							:src="`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`"
							:alt="pokemon.name"
						/>
						<br />

						<div
							class="icon"
							v-for="pokemonType in pokemon.types"
							@click.stop
							:key="pokemonType"
							:class="pokemonType"
							:data-type="pokemonType"
							@click="updateTypeFilter"
						>
							<img
								:src="`https://duiker101.github.io/pokemon-type-svg-icons/icons/${pokemonType}.svg`"
								:data-type="pokemonType"
							/>
						</div>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		name: "Pokemon",
		// data() {
		// 	return {
		// 		typeFilter: ""
		// 	};
		// },
		computed: {
			...mapState({
				typeFilter: state => state.typeFilter
			}),
			pokemonArray() {
				return this.$store.getters.getFilteredPokemon;
			},
			query() {
				return this.$store.getters.getQuery;
			},
		},
		methods: {
			selectPokemon(e) {
				console.log(e.currentTarget.id);
				this.$store.dispatch("setCurrentPokemon", e.currentTarget.id);
			},
			updateTypeFilter(e) {
				console.log(e.path[0].dataset.type);
				this.$store.commit("setTypeFilter", e.path[0].dataset.type);
				this.$store.commit("filterByType", this.query);
			},
			removeTypeFilter() {
				this.$store.commit("setTypeFilter", "");
				this.$store.commit("filterByType", this.query);
			},
			checkTypeIncluded(typeArray) {
				if (this.typeFilter == "") {
					return true;
				} else {
					let count = 0;
					typeArray.forEach(typeObj => {
						if (typeObj.type == this.typeFilter) {
							count++;
						}
					});
					if (count > 0) {
						return true;
					}
					return false;
				}
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.icon:hover {
		cursor: pointer;
	}
</style>