<template>
	<b-container fluid>
		<b-row class="justify-content-center">
			<h1
				class="my-3"
			>{{ pokemon.name.replace(pokemon.name.charAt(0), pokemon.name.charAt(0).toUpperCase()) }} <span style="font-size: 24px; font-style: italic; color: #bbb">#{{ pokemon.id }}</span></h1>
		</b-row>
		<b-row>
			<b-col cols="12" md="6" lg="4">
				<b-img :src="`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`" />
			</b-col>
			<b-col cols="12" md="6" lg="4" border-variant="dark">
				<hr />
				<h3>Base Stats</h3>

				<div
					v-for="statistic in pokemon.stats"
					:key="statistic.stat.name"
					class="row mb-1"
					border-variant="dark"
				>
					<div class="col-6" >{{ statistic.stat.name }}:</div>
					<div class="col-6 pt-1">
						<b-progress max="180" show-value :value="statistic.base_stat" :variant="statistic.variant"></b-progress>
					</div>
				</div>
			</b-col>
			<b-col cols="12" md="12" lg="4">
				<hr />
				<h3>Additional Information</h3>Types:
				<div
					class="icon"
					v-for="pokemonType in pokemon.types"
					:key="pokemonType.type.name"
					:class="pokemonType.type.name"
				>
					<img
						:src="`https://duiker101.github.io/pokemon-type-svg-icons/icons/${pokemonType.type.name}.svg`"
					/>
				</div>
				<br />
				Weight: {{ pokemon.weight / 10 }}kg
				<br />
				Height: {{ pokemon.height / 10 }}m
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		name: "PokemonDetail",
		data() {
			return {};
		},
		computed: {
			pokemon() {
				return this.$store.getters.getCurrentPokemon;
			}
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>