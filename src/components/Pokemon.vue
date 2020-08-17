<template>
	<div>
		<b-container>
			<b-row>
				<b-col
					v-for="pokemon in pokemonArray"
					:key="pokemon"
					@click="selectPokemon"
					:id="pokemon"
					cols="12"
					sm="6"
					md="4"
					lg="3"
					xl="2">
						<b-card style="height: 220px" class="my-2">
							<h5>{{ pokemon.replace(pokemon.charAt(0), pokemon.charAt(0).toUpperCase()) }}</h5>
							<b-card-img-lazy style="max-height: 80%; max-width: 80%; width: auto; height: auto;" :src="`https://img.pokemondb.net/artwork/${pokemon}.jpg`" :alt="pokemon" />
						</b-card>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: "Pokemon",
		data() {
			return {};
		},
		computed: {
			pokemonArray() {
				return this.$store.getters.getPokemonArray;
			},
			query() {
				return this.$store.getters.getQuery;
			}
		},
		methods: {
			selectPokemon(e) {
				this.$store.dispatch("getPokemonDetails", e.currentTarget.id);
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
